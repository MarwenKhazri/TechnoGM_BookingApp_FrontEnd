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

  constructor() { }

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


}
