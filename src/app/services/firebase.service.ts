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

  // declarando orderList
  orderList: AngularFireList<any>;

  private tickets: AngularFireList<Ticket>;
  // private products: AngularFireList<Product>;

  constructor(private db: AngularFireDatabase) {
    this.tickets = this.db.list('/tickets', (ref) =>
      ref.orderByChild('date')
    );
  }

  saveTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  getTickets(): Observable<Ticket[]> {

    return this.tickets.snapshotChanges().pipe(
      //A veces hay que importar map manualmente de rsjs/operators
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }

  getOrders()
  {
    // return this.orderList = this.db.list('tickets');
    this.orderList = this.db.list('tickets')
    return this.orderList;
  }
  
  completeOrder($key:string){
    this.orderList.update($key , {
      status: 'ready',
      endDate: new Date().getTime()
    });
  }

  deleteOrder($key:string) {
    this.orderList.remove($key);
  }

  getReadyTickets() {
    return this.db.list('tickets', ticket =>  ticket.orderByChild('status').equalTo('ready'));
  }
}
