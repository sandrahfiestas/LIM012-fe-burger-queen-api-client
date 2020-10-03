import { Component, OnInit } from '@angular/core';

// service
import { FirebaseService } from '../../services/firebase.service';

// class Ticket
import { Ticket } from '../../models/ticket';
import { KitchenService } from '../../services/kitchen.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  public currentTime;
  public currentMinutes;

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

  confirmTicket(order){
    this.currentTime= new Date().getTime();

      // --Calcula minutes and seconds
      let datesCalc = this.currentTime - this.orderList.find((x) => x.date).date;
      let Mins = Math.floor(((datesCalc % 86400000) % 3600000) / 60000);
      let Seg = Math.floor((((datesCalc % 86400000) % 3600000) % 60000) / 1000);
      this.currentMinutes = (Mins + 'm. ' + Seg + 's.');
    
      console.log(order.$key);
  
  }
}
