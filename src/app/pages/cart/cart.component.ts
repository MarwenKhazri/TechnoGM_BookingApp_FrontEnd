import { Component, OnInit } from '@angular/core';
import {Cabin} from "../../models/cabin";
import {CabinService} from "../../services/cabin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listCartCabins: Cabin[] = [];
  TotalPrice:number = 0;

  constructor(private cabinService: CabinService, private router: Router) { }

  ngOnInit(): void {

    this.cabinService.cabinInCart().subscribe( (res) => {
      this.listCartCabins = res;
      this.listCartCabins.forEach((C) => {
        this.TotalPrice = +this.TotalPrice + +C.price;
      })

    })

  }

  goToReservation () {

    this.router.navigate(['Reservation'])
  }

}
