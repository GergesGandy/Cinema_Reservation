import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CancellationService } from '../service/cancellation.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  chairs : any = [];
  id: any  = "";
  FilmName : any = "";
  constructor(private route: ActivatedRoute, private cancellationService: CancellationService, private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('AuthorizationKey')) {
      this.router.navigate(['Authorization/login']);
    }

    this.id = this.route.snapshot.paramMap.get('id');

    //console.log(this.id);
    if (this.id != null) {
      this.getCancellationFilmName(this.id);
      this.FilmName = this.getCancellationFilmName(this.id);
      //console.log(this.FilmName);
      
      
      this.getChairCancellation(this.id);
    }else{
      this.router.navigate(['/shows']);
    }
  }

  getChairCancellation(show_id : string){
    this.cancellationService.getChairCancellation(show_id)
    .subscribe(
      response =>{
        this.chairs = Object.values(response);
      }
    )
  }

  getCancellationFilmName(show_id : string){
    this.cancellationService.getCancellationFilmName(show_id)
    .subscribe(
      response =>{        
        this.FilmName = response;
      }
    )  }


    cancellationChair(chairID : string, state : boolean){      
      if (!state) {
        if (confirm("Are you sure to cancel seat number " + chairID + " ?")) {
          this.cancellationService.cancel(this.id, chairID).subscribe(response =>{
            this.getChairCancellation(this.id);
            this.reload();
          });        
        }
      }else{
        alert("This chair is not reserved!");
      }

    }


    show = true;
    reload() {
      this.show = false;
      setTimeout(() => this.show = true);
    }

}
