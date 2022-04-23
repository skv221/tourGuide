import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from './guides';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  private guideURL:string="/assets/data/guides.json"

  constructor(private http:HttpClient) { }

  getGuides():Observable<Guide[]>
  {
    return this.http.get<Guide[]>(this.guideURL);
  }
}
