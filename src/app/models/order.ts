import { Product } from '../models/product';

export interface Order {
    id: string;
    customer: string;
    products: Array<Product>;
}