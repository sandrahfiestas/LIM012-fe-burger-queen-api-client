import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Ticket } from '../models/ticket';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private tickets: AngularFireList<Ticket>;
  // private products: AngularFireList<Product>;

  constructor(private db: AngularFireDatabase) {
    this.tickets = this.db.list('/tickets', (ref) =>
      ref.orderByChild('date')
    );

    // this.products = this.db.list('/products', (ref) =>
    //   ref.orderByChild('date')
    // );
  }

  saveTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  getTickets(): Observable<Ticket[]> {

    return this.tickets.snapshotChanges().pipe(
      //?A veces hay que importar map manualmente de rsjs/operators
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }
}