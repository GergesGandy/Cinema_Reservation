import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { show } from '../models/shows.model';
import { ShowsService } from '../service/shows.service';


@Component({  
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})


export class ShowsComponent implements OnInit {
  title = "Reservation";
  shows: show[] = [];
  film : any[] = [];
  movieName = "";
  pageState = true;
  constructor(private showsService: ShowsService, private route: ActivatedRoute, private router: Router){}


  ngOnInit() {
    if (!sessionStorage.getItem('AuthorizationKey')) {
      this.router.navigate(['Authorization/login']);
    }
    
    this.getAvailableFilms();
    this.route.queryParamMap.subscribe(queryParams => {
      if (queryParams.get("cancellation")) {
        this.title = "Cancellation";
        this.pageState = false;
      }
    })
  }



  getAvailableFilms(){
    this.showsService.getAvailableFilms()
    .subscribe(
      response =>{
        this.shows = response;
      }
    )
  }

  getAppointments(id : string, movieName :string){
    this.movieName = movieName;
    this.showsService.getAppointments(id)
    .subscribe(
      response =>{
        //console.log(response);
        this.film = Object.values(response);
      }
    )
  }
}
