import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl: string = "https://auth-eve.herokuapp.com/events";
  private specialEventUrl :string = "https://auth-eve.herokuapp.com/special-events";

  constructor(private _http: HttpClient) { }

  getEvents() {
   return this._http.get<any>(this.eventUrl);
  }

  getSpecialEvents() {
    return this._http.get<any>(this.specialEventUrl);
   }
}
