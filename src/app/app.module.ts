import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { HomeComponent } from './components/home/home.component';
import { DeliverComponent } from './components/deliver/deliver.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    ProductComponent,
    OrderComponent,
    KitchenComponent,
    HomeComponent,
    DeliverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }