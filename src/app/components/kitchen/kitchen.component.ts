import { Component, OnInit } from '@angular/core';

// class Ticket
import { Ticket } from '../../models/ticket';
import { KitchenService } from '../../services/kitchen.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {


  tickets: Ticket[];

  constructor(
   private kitchenService: KitchenService
  ) { }

  ngOnInit(): void {
    this.kitchenService.getTickets()
      .subscribe(tickets =>{
        this.tickets = tickets;
      }
      );
  }

}
