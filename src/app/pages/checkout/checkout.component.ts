import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../../models/reservation";
import {CabinService} from "../../services/cabin.service";
import {Cabin} from "../../models/cabin";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  reservation !: Reservation;
  bookedCabins: any[] = [];
  listCartCabins: Cabin[] = [];
  TotalPrice:number = 0;

  gameRoom: any = null;
  jacuzzi: any = null;
  meetingRoom: any = null;
  playRoom: any = null;
  solarium: any = null;



  constructor(private route: ActivatedRoute, private cabinService: CabinService, private router: Router) { }

  ngOnInit(): void {

    this.cabinService.cabinInCart().subscribe( (res) => {
      this.listCartCabins = res;
      this.listCartCabins.forEach((C) => {
        this.TotalPrice = +this.TotalPrice + +C.price;
      })
      this.listCartCabins.forEach( C => {
        if (C.subCategory == "FOURPAOUTSIDE")
        {
          C.subCategory = "4 PA OUTSIDE"
        }
        else if (C.subCategory == "FOURPAINSIDE")
        {
          C.subCategory = "4 PA INSIDE"
        }
        else if (C.subCategory == "TWOPBOUTSIDE")
        {
          C.subCategory = "2 PB OUTSIDE"
        }
        else if (C.subCategory == "TWOPAINSIDE")
        {
          C.subCategory = "2 PA INSIDE"
        }
        else if (C.subCategory == "HDCOUTSIDE")
        {
          C.subCategory = "HDC OUTSIDE"
        }
        else if (C.subCategory == "ANTIALLERGYINSIDE")
        {
          C.subCategory = "ANTI ALLERGY INSIDE"
        }
        else if (C.subCategory == "LUXURYCABIN")
        {
          C.subCategory = "LUXURY CABIN"
        }


      })
    })



    this.route.params.subscribe((params) =>
      {
        this.reservation = {
          idReservation: null,
          reservationDate:null,
          checkIn : params['IN'],
          checkOut: params['OUT'],
          restaurant: params['RES'],
          playRoom: params['P'],
          meetingRoom: params['M'],
          gameRoom: params['G'],
          jacuzzi: params['J'],
          solarium: params['S'],
          totalPrice:null,
        }

        console.log(this.reservation.jacuzzi)

        if (this.reservation.gameRoom == true)
        {
          this.gameRoom = "YES";
          this.TotalPrice = +this.TotalPrice + 500;
        }
        else
        {
          this.gameRoom = "NO";
        }

        if (this.reservation.solarium == true)
        {
          this.solarium = "YES";
          this.TotalPrice = +this.TotalPrice + 200;
        }
        else
        {
          this.solarium = "NO";
        }

        if (this.reservation.jacuzzi == true)
        {
          console.log(this.reservation.jacuzzi)
          console.log("i am in true")
          this.jacuzzi = "YES";
          this.TotalPrice = +this.TotalPrice + 800;
        }
        else (this.reservation.jacuzzi == false)
        {
          console.log(this.reservation.jacuzzi)
          console.log("i am in false")
          this.jacuzzi = "NO";
        }

        if (this.reservation.meetingRoom == true)
        {
          this.meetingRoom = "YES";
          this.TotalPrice = +this.TotalPrice + 1000;
        }
        else
        {
          this.meetingRoom = "NO";
        }

        if (this.reservation.playRoom == true)
        {
          this.playRoom = "YES";
          this.TotalPrice = +this.TotalPrice + 600;
        }
        else
        {
          this.playRoom = "NO";
        }
      }
    )




  }

  makeReservation()
  {

    for (var i = 0; i < localStorage.length; i++)
    {
      const key = localStorage.key(i);
      this.bookedCabins.push(localStorage.getItem(key!));
    }

    this.cabinService.makeReservation(this.reservation, this.bookedCabins).subscribe( res => this.goToHome());
  }

  goToHome(){
    this.router.navigate(['home'])
  }

}
