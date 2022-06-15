import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.css']
})
export class GuideSignupComponent implements OnInit {

  constructor(private _tourGuideService:TourGuideService,private router: Router) { }

  ngOnInit(): void {
  }
  name="";
  email="";
  phone="";
  pass="";
  cpass="";
  spot="";
  gender="";
  cities = ["Chennai", "Madurai", "Coimbatore", "Kanyakumari","Pondicherry" ];
  page=1;
  warning="";
  openSB=false;

  guide: Guide = {
    _id:"",
    name:"",
    email:"",
    phone:"",
    password:"",
    spot:"",
    gender:"",
    waitingOrders:[],
    myTrips:[]
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

  navigate()
  {
    if(this.name===""||this.email===""||this.phone===""||this.gender===""||this.stringContainsNumber(this.name)||!this.ValidateEmail(this.email)||!this.onlyNumbers(this.phone))
    {
      this.warning="Some Details are missing or irrelevant";
      this.openSnackBar();
    }
    else{
      this.page=2;
    }
  }

  registerGuide(){
    if(this.spot===""||this.pass===""||this.cpass==="")
    {
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else{
      if(this.pass===this.cpass)
      {
        this.guide.name=this.name;
        this.guide.email=this.email;
        this.guide.phone=this.phone;
        this.guide.password=this.pass;
        this.guide.spot=this.spot;
        this.guide.gender=this.gender;
        this._tourGuideService.createGuide(this.guide)
        .subscribe(data=>{
          this.warning="Account created Successfully!!!";
          this.openSnackBar();
          this.router.navigate(['/guideLogin']);
        })
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
