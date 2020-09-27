import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { DeliverComponent } from './components/deliver/deliver.component';

import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    ProductComponent,
    OrderComponent,
    HomeComponent,
    KitchenComponent,
    DeliverComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
