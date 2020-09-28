import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../../assets/menu.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProductsForBreakfast(): Observable<Array<Product>> {
    return (data as any).Menu.filter(c => c.type == 'breakfast');
  }

  getProductsForLunch(): Observable<Array<Product>> {
    return (data as any).Menu.filter(c => c.type == 'lunch');
  }
}