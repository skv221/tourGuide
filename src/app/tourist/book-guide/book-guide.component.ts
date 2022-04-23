import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/guides';
import { TourGuideService } from 'src/app/tour-guide.service';

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
  }
  m="m";
  f="f";
  page=1;
  name="";
  phNo="";
  spot="";
  budget="";
  from="";
  to="";
  total="";
  p1="";
  p2="";
  p3="";
  p4="";
}
