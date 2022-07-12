import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  key = sessionStorage.getItem('AuthorizationKey');

  constructor(private http: HttpClient) { }

  login(email:string, password:string) : Observable<any[]> {
    const headers = { 'Accept': 'application/json' };
    const body = { email: email , password: password };
    return this.http.post<any>('http://127.0.0.1:8000/api/login', body, { headers });
  }

  logout() : Observable<any[]> {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    const body = {};
    return this.http.post<any>('http://127.0.0.1:8000/api/logout', body, { headers });
  }

  register(any: string) : Observable<any[]> {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    const body = {  };
    return this.http.post<any>('http://127.0.0.1:8000/api/reservation', body, { headers });
  }

}
