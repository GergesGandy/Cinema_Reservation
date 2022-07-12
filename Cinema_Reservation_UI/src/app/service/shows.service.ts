import { HttpClient } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { show } from "../models/shows.model";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  key = sessionStorage.getItem('AuthorizationKey');

  constructor(private http: HttpClient) { }

  getAvailableFilms() : Observable<show[]> {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get<show[]>('http://127.0.0.1:8000/api/show', { headers });
  }

  getAppointments(any: string) : Observable<show[]> {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get<show[]>('http://127.0.0.1:8000/api/show/' + any, { headers });
  }
}
