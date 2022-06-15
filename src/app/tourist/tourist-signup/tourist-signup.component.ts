import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-tourist-signup',
  templateUrl: './tourist-signup.component.html',
  styleUrls: ['./tourist-signup.component.css']
})
export class TouristSignupComponent implements OnInit {

  constructor(private _tourGuideService:TourGuideService,private router: Router) { }

  ngOnInit(): void { 
  }
  name="";
  email="";
  phone="";
  pass="";
  cpass="";
  warning="";
  openSB=false;

  tourist:Tourist={
    _id:"",
    name:"",
    email:"",
    phone:"",
    password:"",
    details:[],
    plannedTrips:[],
    currentTrip:{none:"none"}
  }

  stringContainsNumber(_string: string) {
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return /\d/.test(_string)||_string.match(format);
  }

 ValidateEmail(_string:string){
    var atposition=_string.indexOf("@");  
    var dotposition=_string.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=_string.length){    
      return false;  
    }
    else{
      return true;
    }
  }

  onlyNumbers(_phone:string) {
    return /^[0-9]+$/.test(_phone);
  }

  registerTourist()
  {
    if(this.name===""||this.email===""||this.phone===""||this.pass===""||this.cpass===""||this.stringContainsNumber(this.name)||!this.ValidateEmail(this.email)||!this.onlyNumbers(this.phone)){
      this.warning="Some Details are missing or irrelevant";
      this.openSnackBar();
    }
    else{
      if(this.pass===this.cpass)
      {
        this.tourist.name=this.name;
        this.tourist.email=this.email;
        this.tourist.phone=this.phone;
        this.tourist.password=this.pass;
        this._tourGuideService.createTourist(this.tourist)
        .subscribe(data=>{
          this.warning="Account created Successfully!!!";
          this.openSnackBar();
          this.router.navigate(['/touristLogin'])
        });
      }
      else{
        this.warning="Passwords don't match";
        this.pass="";
        this.cpass="";
        this.openSnackBar();
      }
    }
  }

  openSnackBar() {
    this.openSB=true;
    setTimeout(()=>{
      this.openSB=false;
    },3000);
  }

}
