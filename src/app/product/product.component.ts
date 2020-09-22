import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products$ = new Observable<Array<Product>>();
  orders$ = new Observable<Order>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProductsForBreakfast();
    console.log(this.products$);
  }

  getBreakfast($event){    
    this.products$ = this.productService.getProductsForBreakfast();  
  }    

  getLunch($event){    
    this.products$ = this.productService.getProductsForLunch();  
  }  
  
  addProduct(product){
    
console.log(product);
  }
}
