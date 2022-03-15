import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideLoginComponent } from './guide/guide-login/guide-login.component';
import { GuideSignupComponent } from './guide/guide-signup/guide-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TouristHomeComponent } from './tourist/tourist-home/tourist-home.component';
import { TouristLoginComponent } from './tourist/tourist-login/tourist-login.component';
import { TouristSignupComponent } from './tourist/tourist-signup/tourist-signup.component';

const routes: Routes = [
  {path:"home",component:LandingPageComponent},
  {path:"touristLogin",component:TouristLoginComponent},
  {path:"touristSignup",component:TouristSignupComponent},
  {path:"touristHome",component:TouristHomeComponent},
  {path:"guideLogin",component:GuideLoginComponent},
  {path:"guideSignup",component:GuideSignupComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
