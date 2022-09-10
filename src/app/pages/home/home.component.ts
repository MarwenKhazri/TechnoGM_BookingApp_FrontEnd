import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CabinService} from "../../services/cabin.service";
import {Cabin} from "../../models/cabin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCabins!: Cabin[]
  numberOfPassengers!: number;


  constructor(private cabinService: CabinService) { }

  ngOnInit(): void {

  }

}
