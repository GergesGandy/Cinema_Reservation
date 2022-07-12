import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancellationService {
  key = sessionStorage.getItem('AuthorizationKey');

  constructor(private http: HttpClient) { }

  getChairCancellation(any: string) {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get('http://127.0.0.1:8000/api/cancellation/' + any, { headers });
  }

  getCancellationFilmName(any: string) {
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    return this.http.get('http://127.0.0.1:8000/api/cancellationFilmName/' + any, { headers });
  }

  cancel(show_id : string, chairID : string){
    const headers = { 'Authorization': 'Bearer ' + this.key, 'Accept': 'application/json' };
    const body = { show_id: show_id , chair_num: chairID };
    return this.http.post<any>('http://127.0.0.1:8000/api/cancellation', body, { headers });
  }
}
