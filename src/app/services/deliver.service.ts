import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {

  constructor(private firebaseService: FirebaseService) { }

  getReadyTickets() {
    return this.firebaseService.getReadyTickets();
  }
  
}