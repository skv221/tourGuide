import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TouristLoginComponent } from './tourist/tourist-login/tourist-login.component';
import { TouristSignupComponent } from './tourist/tourist-signup/tourist-signup.component';
import { GuideLoginComponent } from './guide/guide-login/guide-login.component';
import { GuideSignupComponent } from './guide/guide-signup/guide-signup.component';
import { TouristHomeComponent } from './tourist/tourist-home/tourist-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurrentRideComponent } from './tourist/current-ride/current-ride.component';
import { BookGuideComponent } from './tourist/book-guide/book-guide.component';
import { TouristProfileComponent } from './tourist/tourist-profile/tourist-profile.component';
import { TourGuideService } from './tour-guide.service';
import { GuideHomeComponent } from './guide/guide-home/guide-home.component';
import { BookingComponent } from './guide/booking/booking.component';
import { GuideProfileComponent } from './guide/guide-profile/guide-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TouristLoginComponent,
    TouristSignupComponent,
    GuideLoginComponent,
    GuideSignupComponent,
    TouristHomeComponent,
    PageNotFoundComponent,
    CurrentRideComponent,
    BookGuideComponent,
    TouristProfileComponent,
    GuideHomeComponent,
    BookingComponent,
    GuideProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TourGuideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
