import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-book-guide',
  templateUrl: './book-guide.component.html',
  styleUrls: ['./book-guide.component.css']
})
export class BookGuideComponent implements OnInit {

  constructor(private _tourGuideService:TourGuideService, private route:ActivatedRoute) { }

  public guides!: Guide[];
  public touristId!: string | null;
  public loggedUser!: Tourist;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.touristId = id;
    this._tourGuideService.getTourist(this.touristId)
    .subscribe(data=>{
      this.loggedUser=data;
      console.log(this.loggedUser);
    });
    this._tourGuideService.getGuides()
    .subscribe(data=>this.guides=data);
  }
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
  plannedTrips!:any;

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
  navigate4()
  {
    this.plannedTrips={
      id:this.loggedUser._id,
      touristName:this.loggedUser.name,
      noOfTourist:this.total,
      dest:this.spot,
      bud:this.budget,
      fr:this.from,
      t:this.to,
      pre1:this.p1,
      pre2:this.p2,
      pre3:this.p3,
      pre4:this.p4,
      guideName:"Not accepted",
      guideNo:"NA",
      status:"Waiting"
    };
    this.loggedUser.plannedTrips.push(this.plannedTrips);
    this._tourGuideService.updateTourist(this.loggedUser)
    .subscribe(data=>console.log("Update!!"));
    for(var guide of this.guides)
    {
      if(guide.spot===this.spot)
      {
        guide.waitingOrders.push(this.plannedTrips);
        this._tourGuideService.updateGuide(guide)
        .subscribe(data=>console.log("Update!!"));
      }
    }
    this.page=5;
  }

  

}
