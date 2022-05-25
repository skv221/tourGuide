import { Component, OnInit } from '@angular/core';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.component.html',
  styleUrls: ['./tourist-profile.component.css']
})
export class TouristProfileComponent implements OnInit {

  public loggedUser!: Tourist; 

  constructor(private _tourGuideService:TourGuideService) { }

  ngOnInit(): void {
    this.loggedUser = this._tourGuideService.getLoggedUser();
    console.log(this.loggedUser);
  }

}
