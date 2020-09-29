import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { OrderComponent } from '../components/order/order.component';
import { KitchenComponent } from '../components/kitchen/kitchen.component';
import { DeliverComponent } from '../components/deliver/deliver.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'order', component: OrderComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'deliver', component: DeliverComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule], 
})
export class RouteModule { }
