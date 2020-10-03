import { Component, OnInit } from '@angular/core';


// service
import { FirebaseService } from '../../services/firebase.service';

// class Ticket
import { Ticket } from '../../models/ticket';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  
  orderList: Ticket[];

  constructor(
    private firebaseService: FirebaseService,
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
          const listProduct = element;
          console.log(this.orderList);
                    
          return { listProduct, ...x };
        });
      });
  }
  
  productsArray(obj){ 
    return Object.keys(obj).map((key)=>{ return obj[key]}); 
  }
}
