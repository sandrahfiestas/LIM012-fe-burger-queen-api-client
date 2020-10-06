import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
@Injectable({
  providedIn: 'root'
})
export class DeliverService {

  constructor(private firebaseService: FirebaseService) { }

  getReadyTickets() {
    return this.firebaseService.getReadyTickets();
  }

  deleteOrderDelivered($key: string) {
    return this.firebaseService.deleteOrderDelivered($key);
  }
  
}