import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error : string = "";
  Authorization : Boolean = !(sessionStorage.getItem('AuthorizationKey')  === null);
  constructor(private authorizationService : AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    if (this.Authorization) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }


 login(email:string, password:string){


  this.authorizationService.login(email, password)
  .subscribe(
    (response : any) =>{
      sessionStorage.setItem('AuthorizationKey', response.token);
      sessionStorage.setItem('AuthorizationName', response.user.name);
      sessionStorage.setItem('AuthorizationEmail', response.user.email);
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    },
    (err) => {
      this.error = "Please check email or password";
    }
  )
}


}
