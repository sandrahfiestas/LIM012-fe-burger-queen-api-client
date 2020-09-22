import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {
  orderedProducts = [];
  totalOrder = 0;

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

  calculateTotal(){
    this.totalOrder = 0;
    this.orderedProducts.forEach((product) => {
      this.totalOrder += product.count * product.price;
    });
  }
}