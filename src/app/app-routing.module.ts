import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MakeReservationComponent} from "./pages/make-reservation/make-reservation.component";
import {CabinListComponent} from "./pages/cabin-list/cabin-list.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Reservation', component: MakeReservationComponent},
  {path: 'listCabins/:AD/:LD/:A/:C/:CAT', component: CabinListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout/:IN/:OUT/:RES/:P/:M/:G/:J/:S', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
