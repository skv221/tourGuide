import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';

@Component({
  selector: 'app-guide-profile',
  templateUrl: './guide-profile.component.html',
  styleUrls: ['./guide-profile.component.css']
})
export class GuideProfileComponent implements OnInit {

  constructor(private _tourGuideService: TourGuideService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.guideID = id;
    this._tourGuideService.getGuide(this.guideID)
    .subscribe(data=>{
      this.guide=data;
    })
  }

  public guideID!: string | null;
  public guide!: Guide;

}
