import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-book-guide',
  templateUrl: './book-guide.component.html',
  styleUrls: ['./book-guide.component.css']
})
export class BookGuideComponent implements OnInit {

  constructor(private _tourGuideService:TourGuideService) { }

  public guides!: Guide[];

  ngOnInit(): void {
      this._tourGuideService.getGuides()
          .subscribe(data=>this.guides=data);
      this.loggedUser = this._tourGuideService.getLoggedUser();
  }
  public loggedUser!: Tourist;
  cities = ["Chennai", "Madurai", "Coimbatore", "Kanyakumari","Pondicherry" ];
  preferences = ["Natural Places", "Religious Places", "Historic Places", "Partying and Fun","None" ];
  m="m";
  f="f";
  page=1;
  spot="";
  budget="";
  from="";
  to="";
  total="";
  p1="";
  p2="";
  p3="";
  p4="";
  openSB=false;

  openSnackBar() {
    this.openSB=true;
    setTimeout(()=>{
      this.openSB=false;
    },3000);
  }

  navigate1()
  {
    if(this.spot===""&&this.total==="")
    {
      this.openSnackBar();
    }
    else{
      this.page=2;
    }
  }
  navigate3()
  {
    if(this.p1===""&&this.p2===""&&this.p3===""&&this.p4==="")
    {
      this.openSnackBar();
    }
    else{
      this.page=4;
    }
  }
  navigate2()
  {
    if(this.budget===""&&this.from===""&&this.to==="")
    {
      this.openSnackBar();
    }
    else{
      this.page=3;
    }
  }
}
