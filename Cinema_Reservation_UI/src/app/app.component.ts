import { Component, OnInit } from '@angular/core';
import { show } from './models/shows.model';
import { ShowsService } from './service/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cinema_Reservation_UI';
  Authorization : Boolean = !(sessionStorage.getItem('AuthorizationKey')  === null);

  
  ngOnInit(): void {
  }

 

}
