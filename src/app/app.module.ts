import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TouristLoginComponent } from './tourist/tourist-login/tourist-login.component';
import { TouristSignupComponent } from './tourist/tourist-signup/tourist-signup.component';
import { GuideLoginComponent } from './guide/guide-login/guide-login.component';
import { GuideSignupComponent } from './guide/guide-signup/guide-signup.component';
import { TouristHomeComponent } from './tourist/tourist-home/tourist-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TouristLoginComponent,
    TouristSignupComponent,
    GuideLoginComponent,
    GuideSignupComponent,
    TouristHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
