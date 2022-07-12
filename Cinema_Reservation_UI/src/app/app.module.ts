import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowsComponent } from './shows/shows.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { AuthorizationRoutingModule } from './authorization/authorization-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ReservationComponent,
    CancellationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthorizationModule,
    AuthorizationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
