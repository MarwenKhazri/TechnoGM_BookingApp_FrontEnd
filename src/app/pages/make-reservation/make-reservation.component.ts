import { Component, OnInit } from '@angular/core';
import {CabinService} from "../../services/cabin.service";
import {Reservation} from "../../models/reservation";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss'],
  
})
export class MakeReservationComponent implements OnInit {

  reservation !: Reservation;

  constructor(private cabinService: CabinService, private router: Router) { }

  ngOnInit(): void {

    this.reservation = {
      idReservation: null,
      reservationDate:null,
      checkIn:null,
      checkOut:null,
      restaurant:null,
      playRoom:false,
      meetingRoom:false,
      gameRoom:false,
      jacuzzi:false,
      solarium:false,
      totalPrice:null,
    }

  }

  makeReservation(checkIn: any, checkOut: any, restaurant:any)
  {
    this.reservation.checkIn = checkIn;
    this.reservation.checkOut = checkOut;
    this.reservation.restaurant = restaurant;
    this.reservation.reservationDate =


    this.cabinService.makeReservation(this.reservation).subscribe( res => this.goToHome());


  }

  goToHome(){
    this.router.navigate(['home'])
  }

}
