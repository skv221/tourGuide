import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-tourist-login',
  templateUrl: './tourist-login.component.html',
  styleUrls: ['./tourist-login.component.css']
})
export class TouristLoginComponent implements OnInit {

  constructor(private _tourGuideService:TourGuideService,private router: Router) { }

  public tourists!:Tourist[];

  ngOnInit(): void {
    this._tourGuideService.getTourists()
        .subscribe(data => this.tourists=data);
  }

  username="";
  password="";
  warning="";
  openSB=false;

  login()
  {
    if(this.username===""||this.password==="")
    {
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else
    {
      let currentUser = this.tourists.filter(user=>(user.email===this.username||user.phone===this.username)
                                                  && user.password===this.password);
      if(currentUser.length)
      {
        this.router.navigate(['/touristHome']);
      }
      else
      {
        this.warning="Incorrect Email/Phone number and password";
        this.openSnackBar();
        this.username="";
        this.password="";
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
