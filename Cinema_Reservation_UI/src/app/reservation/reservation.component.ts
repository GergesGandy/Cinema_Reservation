import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ReservationService } from '../service/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  chairs : any = [];
  id: any  = "";
  FilmName : any = "";
  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('AuthorizationKey')) {
      this.router.navigate(['Authorization/login']);
    }

    this.id = this.route.snapshot.paramMap.get('id');
    
    //console.log(this.id);
    if (this.id != null) {
      this.getReservationFilmName(this.id);
      this.FilmName = this.getReservationFilmName(this.id);
      //console.log(this.FilmName);
      
      
      this.getChairReservations(this.id);
    }else{
      this.router.navigate(['/shows']);
    }
  }

  getChairReservations(show_id : string){
    this.reservationService.getChairReservations(show_id)
    .subscribe(
      response =>{
        this.chairs = Object.values(response);
      }
    )
  }

  getReservationFilmName(show_id : string){
    this.reservationService.getReservationFilmName(show_id)
    .subscribe(
      response =>{        
        this.FilmName = response;
      }
    )  }


    reservationChair(chairID : string, state : boolean){      
      if (state) {
        if (confirm("Are you sure to reserve seat number " + chairID + " ?")) {
          this.reservationService.reserve(this.id, chairID).subscribe(response =>{
            this.getChairReservations(this.id);
            this.reload();
          });        
        }
      }else{
        alert("This chair is already taken!");
      }

    }


    show = true;
    reload() {
      this.show = false;
      setTimeout(() => this.show = true);
    }

}
