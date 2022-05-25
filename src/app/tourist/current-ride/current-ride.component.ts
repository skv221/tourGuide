import { Component, OnInit } from '@angular/core';
declare const L:any;

@Component({
  selector: 'app-current-ride',
  templateUrl: './current-ride.component.html',
  styleUrls: ['./current-ride.component.css']
})
export class CurrentRideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
      marker.bindPopup("You are here!!!").openPopup();
    });
    
  }

}
