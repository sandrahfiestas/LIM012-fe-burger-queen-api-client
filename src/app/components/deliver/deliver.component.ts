import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { DeliverService } from '../../services/deliver.service';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss']
})
export class DeliverComponent implements OnInit {
  tickets: Ticket[];

  constructor(private deliverService : DeliverService) { }

  ngOnInit(): void {

    this.deliverService.getReadyTickets()
    .snapshotChanges()
    .subscribe(item => {
      this.tickets = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.tickets.push(x as Ticket);
        const listProduct = element;
                   
        return { listProduct, ...x };
      });
    });
  }

  productsArray(obj){ 
    return Object.keys(obj).map((key)=>{ return obj[key]}); 
  }
}
