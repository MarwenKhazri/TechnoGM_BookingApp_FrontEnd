import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MakeReservationComponent } from './pages/make-reservation/make-reservation.component';
import { CabinListComponent } from './pages/cabin-list/cabin-list.component';
import { CartComponent } from './pages/cart/cart.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MakeReservationComponent,
    CabinListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
