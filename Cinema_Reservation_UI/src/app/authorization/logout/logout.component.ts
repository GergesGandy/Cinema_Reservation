import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  Authorization : Boolean = (sessionStorage.getItem('AuthorizationKey')  === null);

  constructor(private authorizationService : AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    if (this.Authorization) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
    
    this.authorizationService.logout().subscribe(
      (response) =>{
        sessionStorage.clear();
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      },
      (err) => {console.log('error data');}
    )
  }
  

}
