import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { NgForm } from '@angular/forms';

import { Product } from 'src/app/models/product';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  orderedProducts = [];
  totalOrder = 0;
  customerName = '';
  numberTable = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addOrderedProduct(product: Product) {
    const findProduct = this.orderedProducts.find((orderProduct) => orderProduct.id === product.id);

    if (findProduct == null) {
      this.orderedProducts.push(product);
    } else {
      findProduct.count += 1;
    }

    this.calculateTotal();
  }

  decreaseProduct(product: Product) {
    const findProduct = this.orderedProducts.find((orderProduct) => orderProduct.id === product.id);

    if (findProduct !== null && findProduct.count > 1) {
      findProduct.count -= 1;
    }

    this.calculateTotal();
  }

  deleteProduct(product: Product) {
    const indexProduct = this.orderedProducts.findIndex((orderProduct) => orderProduct.id === product.id);

    if (indexProduct >= 0) {
      this.orderedProducts.splice(indexProduct, 1);
    }

    this.calculateTotal();
  }

  calculateTotal() {
    this.totalOrder = 0;
    this.orderedProducts.forEach((product) => {
      this.totalOrder += product.count * product.price;
    });
  }

  //Pedido para enviar a Firebase

  orderTaken() {
    let ticket: Ticket = {
      numberTable: this.numberTable,
      client: this.customerName,
      date: new Date().getTime(),
      status: 'pending',
      orderedProducts: this.orderedProducts,
      total: this.totalOrder
    }

    console.log(ticket)
  }


}