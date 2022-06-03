import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourGuideService } from 'src/app/tour-guide.service';
import { Tourist } from 'src/app/tourists';

@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.component.html',
  styleUrls: ['./tourist-profile.component.css']
})
export class TouristProfileComponent implements OnInit {

  public loggedUser!: Tourist; 
  public touristId!: string | null;

  constructor(private _tourGuideService:TourGuideService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.touristId = id;
    this._tourGuideService.getTourist(this.touristId)
    .subscribe(data=>this.loggedUser=data);
  }

}
