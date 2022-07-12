import { HttpClient } from "@angular/common/http";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }
  key = sessionStorage.getItem('AuthorizationKey');

  getChairReservations(any: string) {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get('http://127.0.0.1:8000/api/reservation/' + any, { headers });
  }

  getReservationFilmName(any: string) {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get('http://127.0.0.1:8000/api/reservationFilmName/' + any, { headers });
  }

  reserve(show_id : string, chairID : string){
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    const body = { show_id: show_id , chair_num: chairID };
    return this.http.post<any>('http://127.0.0.1:8000/api/reservation', body, { headers });
  }
  
  
}
