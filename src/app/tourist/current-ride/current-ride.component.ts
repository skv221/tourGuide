import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';
declare const L:any;

@Component({
  selector: 'app-current-ride',
  templateUrl: './current-ride.component.html',
  styleUrls: ['./current-ride.component.css']
})
export class CurrentRideComponent implements OnInit {

  public touristId!: string | null;
  public loggedUser!: Tourist;
  public showMap: Boolean = false;

  constructor(private _tourGuideService:TourGuideService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.touristId = id;
    this._tourGuideService.getTourist(this.touristId)
    .subscribe(data=>{
      this.loggedUser=data;
      this.checkDate();
    });
    navigator.geolocation.getCurrentPosition((position)=>
    {
      console.log(position.coords.latitude+' '+position.coords.longitude);
      let map = L.map('map').setView([position.coords.latitude,position.coords.longitude], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2t2MjIxIiwiYSI6ImNsM2p3cXBmaTBvZmEza3BjODAzNjRjam4ifQ.7s7v_zhTK4tUOE7mmt5IxQ', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoic2t2MjIxIiwiYSI6ImNsM2p3cXBmaTBvZmEza3BjODAzNjRjam4ifQ.7s7v_zhTK4tUOE7mmt5IxQ'
      }).addTo(map);
      L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      this._tourGuideService.getCity(lat,lng).subscribe(data=>{
        this.cl=data;
      });
    
     });
  }
  cl!:any;
  callEmergency()
  {
    window.location.href = 'tel:100';
  }

  checkDate(){
    const today = new Date();
    
    for(var trip of this.loggedUser.plannedTrips)
    {
      const tripDate = new Date(trip.fr);
      if(today.toDateString()==tripDate.toDateString())
      {
        this.loggedUser.currentTrip=trip;
        this._tourGuideService.updateTourist(this.loggedUser)
        this.showMap=true;
      }
      else if(today.toDateString()>trip.toDateString())
      {
        this.loggedUser.details.push(trip);
        const index = this.loggedUser.plannedTrips.indexOf(trip);
        if(index>-1)
          this.loggedUser.plannedTrips.splice(index,1);
        this._tourGuideService.updateTourist(this.loggedUser)
      }
    }
  }
}
