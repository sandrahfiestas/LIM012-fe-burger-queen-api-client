import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor( private firebaseService : FirebaseService) { 
  }

  getTickets(): Observable<Ticket[]> {
    return this.firebaseService.getTickets();
  }
}
