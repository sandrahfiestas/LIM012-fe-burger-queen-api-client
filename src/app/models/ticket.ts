import { Product } from './product';

export interface Ticket {
    client: string;
    startDate: number;
    endDate: number; 
    numberTable: string;
    status: string;
    orderedProducts: Array<Product>,
    total: number
}