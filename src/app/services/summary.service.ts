import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseService } from './firebase.service';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private firebaseService: FirebaseService) { }

  saveTicket(ticket: Ticket) {
    //aqui puedo poner más lógica de negocio antes de mandar a firebase
    this.firebaseService.saveTicket(ticket);
  }

  getTickets(): Observable<Ticket[]> {
    return this.firebaseService.getTickets();
  }
}