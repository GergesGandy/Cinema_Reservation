import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ShowsComponent } from './shows/shows.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'cancellation/:id', component: CancellationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }