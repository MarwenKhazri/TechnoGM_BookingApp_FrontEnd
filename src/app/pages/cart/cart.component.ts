import { Component, OnInit } from '@angular/core';
import {Cabin} from "../../models/cabin";
import {CabinService} from "../../services/cabin.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listCartCabins!: Cabin[];

  constructor(private cabinService: CabinService) { }

  ngOnInit(): void {

    this.cabinService.cabinInCart().subscribe( (res) => this.listCartCabins = res)

  }

}
