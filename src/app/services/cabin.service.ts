import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cabin} from "../models/cabin";

@Injectable({
  providedIn: 'root'
})
export class CabinService {

  readonly API_URL = 'http://localhost:8089';

  constructor(private httpClient: HttpClient) { }

  findCabin(AD: any, LD: any, NP: number): Observable<Cabin[]>
  {
    const params = new HttpParams()
      .set("arrive", AD)
      .set("leave", LD)
      .set("passengers", NP)

    return this.httpClient.get<Cabin[]>(this.API_URL + '/SpringMVC/Cabin/FindCabins', {params})
  }
}
