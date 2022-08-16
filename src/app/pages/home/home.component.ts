import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CabinService} from "../../services/cabin.service";
import {Cabin} from "../../models/cabin";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCabins!: Cabin[]


  constructor(private cabinService: CabinService) { }

  ngOnInit(): void {

  }

  findCabin(arriveDate: any, leaveDate: any, passengerNum: any)
  {
    this.cabinService.findCabin(arriveDate, leaveDate, passengerNum).subscribe((res) => {
      this.listCabins = res
    })
  }

}
