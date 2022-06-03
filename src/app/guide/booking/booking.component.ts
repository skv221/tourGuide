import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private _tourGuideService : TourGuideService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.guideID = id;
    this._tourGuideService.getGuide(this.guideID)
    .subscribe(data=>this.guide=data);
    this._tourGuideService.getGuides()
    .subscribe(data=>this.guides=data);
  }

  public guideID!: string | null; 
  public guide!: Guide;
  trip: any;
  loggedTourist!: Tourist;
  public guides!: Guide[];


  reject(i:number){
    this.guide.waitingOrders.splice(i,1);
    this._tourGuideService.updateGuide(this.guide)
    .subscribe(data=>console.log(data));
  }

  accept(i:number){
    this.trip = this.guide.waitingOrders[i];
    console.log(this.trip);
    this.guide.myTrips.push(this.trip);
    this.guide.waitingOrders.splice(i,1);
    this._tourGuideService.updateGuide(this.guide)
    .subscribe(data=>console.log(data));
    this._tourGuideService.getTourist(this.trip.id)
    .subscribe(data=>{
      this.loggedTourist=data;
      for(let trip of this.loggedTourist.plannedTrips)
      {
        if(JSON.stringify(trip) === JSON.stringify(this.trip)){
          trip.guideName=this.guide.name;
          trip.guideNo=this.guide.phone;
          break;
        }
      }
      this._tourGuideService.updateTourist(this.loggedTourist)
      .subscribe(data=>console.log(data));
    });
    for(var guide of this.guides)
    {
      if(guide.spot===this.trip.dest)
      {
        for(var order of guide.waitingOrders)
        {
          if(JSON.stringify(order) === JSON.stringify(this.trip)){
            let ind = guide.waitingOrders.indexOf(order);
            guide.waitingOrders.splice(ind,1);
            this._tourGuideService.updateGuide(guide);
          }
        }
      }
    }
  }

}
