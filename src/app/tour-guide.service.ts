import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from './guides';
import { Tourist } from './tourists';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  private guideURL:string="/assets/data/guides.json";
  private touristURL:string="/assets/data/tourists.json";

  constructor(private http:HttpClient) { }

  getGuides():Observable<Guide[]>
  {
    return this.http.get<Guide[]>(this.guideURL);
  }

  getTourists():Observable<Tourist[]>
  {
    return this.http.get<Tourist[]>(this.touristURL);
  }
  loggedUser!: Tourist;
  setLoggedUser(tourist:Tourist)
  {
    this.loggedUser=tourist;
  }
  getLoggedUser()
  {
    return this.loggedUser;
  }
}
