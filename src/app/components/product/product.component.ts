import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

export class ProductComponent implements OnInit {
  products$ = new Observable<Array<Product>>();

  @Input() summary: SummaryComponent;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProductsForBreakfast();
    console.log(this.products$);
  }

  getBreakfast($event) {
    this.products$ = this.productService.getProductsForBreakfast();
  }

  getLunch($event) {
    this.products$ = this.productService.getProductsForLunch();
  }

  addProduct(product) {
    this.summary.addOrderedProduct(product);
  }
}

