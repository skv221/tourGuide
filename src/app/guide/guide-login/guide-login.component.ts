import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';

@Component({
  selector: 'app-guide-login',
  templateUrl: './guide-login.component.html',
  styleUrls: ['./guide-login.component.css']
})
export class GuideLoginComponent implements OnInit {

  constructor(private _tourGuideService: TourGuideService, private router: Router) { }

  guides!: Guide[];

  ngOnInit(): void {
    this._tourGuideService.getGuides()
    .subscribe(data=>this.guides=data);
  }
  userName="";
  password="";
  warning="";
  openSB=false;

  login()
  {
    if(this.userName===""||this.password==="")
    {
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else
    {
      let currentUser = this.guides.filter(user=>(user.email===this.userName||user.phone===this.userName)
                                                  && user.password===this.password);
      if(currentUser.length)
      {
        this.router.navigate(['/guideHome/'+currentUser[0]._id]);
      }
      else
      {
        this.warning="Incorrect Email/Phone number and password";
        this.openSnackBar();
        this.userName="";
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
