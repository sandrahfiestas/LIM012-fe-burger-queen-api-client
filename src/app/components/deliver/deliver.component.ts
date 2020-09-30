import { Component, OnInit } from '@angular/core';

// service
import { FirebaseService } from '../../services/firebase.service';

// class Ticket
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss']
})
export class DeliverComponent implements OnInit {

  orderList: Ticket[];

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.firebaseService.getOrders()
      .snapshotChanges()
      .subscribe(item => {
        this.orderList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.orderList.push(x as Ticket);
        });
      });
  }

}
