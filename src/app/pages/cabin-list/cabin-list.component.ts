import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Cabin} from "../../models/cabin";
import {CabinService} from "../../services/cabin.service";

@Component({
  selector: 'app-cabin-list',
  templateUrl: './cabin-list.component.html',
  styleUrls: ['./cabin-list.component.scss']
})
export class CabinListComponent implements OnInit {

  arriveDate!: any;
  leaveDate!: any;
  adultNum!:any;
  childNum!:any;
  category!:any;
  numberOfPassengers!:any;
  listCabins!: Cabin[]
  currentCartLength: number = 0;
  nextCartValue: number = 0;

  constructor(private route: ActivatedRoute, private cabinService: CabinService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) =>
      {
        this.arriveDate = params['AD']
        this.leaveDate = params['LD']
        this.adultNum = params['A']
        this.childNum = params['C']
        this.category = params['CAT']
      }
    )

    //
    this.updateSearch();

  }

  addCabinToCart(idc: any) {

    console.log(idc);

    this.currentCartLength = localStorage.length;
    this.nextCartValue = ++this.currentCartLength;

    localStorage.setItem(this.nextCartValue.toString(),idc);
  }

  updateCategory() {

    const input = document.getElementById('categoryInput');
    input?.addEventListener('click', event => {
      const result = (event.target as HTMLSelectElement).value;
      console.log(result);
      this.category = result;
    })
  }

  updateArriveDate() {

    const input = document.getElementById('arriveInput');
    input?.addEventListener('change', event => {
      const result = (event.target as HTMLInputElement).value;
      console.log(result);
      this.arriveDate = result;
    })
  }

  updateLeaveDate() {

    const input = document.getElementById('leaveInput');
    input?.addEventListener('change', event => {
      const result = (event.target as HTMLInputElement).value;
      console.log(result);
      this.arriveDate = result;
    })
  }

  updateAdultNum() {

    const input = document.getElementById('adultNum');
    input?.addEventListener('change', event => {
      const result = (event.target as HTMLInputElement).value;
      console.log(result);
      this.adultNum = result;
    })
  }

  updateChildNum() {

    const input = document.getElementById('childNum');
    input?.addEventListener('change', event => {
      const result = (event.target as HTMLInputElement).value;
      console.log(result);
      this.childNum = result;
    })
  }

  updateSearch() {

    this.numberOfPassengers = +this.adultNum + +this.childNum;
    this.cabinService.findCabin(this.arriveDate, this.leaveDate, this.numberOfPassengers, this.category).subscribe((res) => {
      this.listCabins = res
      this.listCabins.forEach( C => {
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
  }

  filterSearch(deckNum: any, event: any) {

    if(event.target.checked)
    {
      console.log(deckNum)
      this.listCabins = this.listCabins.filter( C => C.deck.deckNumber == deckNum)
      this.listCabins.forEach( C => console.log(C.idCabin))
    }
    else
    {
      this.updateSearch()
    }

  }

}
