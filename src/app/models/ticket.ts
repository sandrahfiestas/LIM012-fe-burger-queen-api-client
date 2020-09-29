import { Product } from './product';

export interface Ticket {
    client: string;
    date: number;
    numberTable: number;
    status: string;
    orderedProducts: Array<Product>,
    total: number
}