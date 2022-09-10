import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cabin} from "../models/cabin";
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class CabinService {

  readonly API_URL = 'http://localhost:8089';

  cabinIdsInCart:any[] = [];

  constructor(private httpClient: HttpClient) { }

  findCabin(AD: any, LD: any, NP: number, CAT: any): Observable<Cabin[]>
  {
    const params = new HttpParams()
      .set("arrive", AD)
      .set("leave", LD)
      .set("passengers", NP)
      .set("category", CAT)

    return this.httpClient.get<Cabin[]>(this.API_URL + '/SpringMVC/Cabin/FindCabins', {params})
  }

  makeReservation(R : Reservation)
  {
    return this.httpClient.post<Reservation>(this.API_URL + '/SpringMVC/Reservation/MakeReservation/1,2' , R);
  }

  cabinInCart()
  {

    for (var i = 0; i < localStorage.length; i++)
    {
      const key = localStorage.key(i);
      this.cabinIdsInCart.push(localStorage.getItem(key!));
    }

    return this.httpClient.get<Cabin[]>(this.API_URL + '/SpringMVC/Cabin/MyCabins/' + this.cabinIdsInCart)

  }

}
