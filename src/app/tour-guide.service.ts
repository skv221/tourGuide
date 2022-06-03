import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guide } from './guides';
import { Tourist } from './tourists';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  private guideURL:string="/api/guides";
  private touristURL:string="/api/tourists";

  constructor(private http:HttpClient) { }

  getTourists(){
    return this.http.get<Tourist[]>(this.touristURL);
  }

  getTourist(id:string | null){
    return this.http.get<Tourist>(this.touristURL+'/'+id);
  }

  createTourist(tourist: Tourist){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Tourist>(this.touristURL,JSON.stringify(tourist),options)
  }

  updateTourist(tourist: Tourist){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Tourist>(this.touristURL+'/'+tourist._id,JSON.stringify(tourist),options)
  }
  
  getGuides(){
    return this.http.get<Guide[]>(this.guideURL);
  }

  getGuide(id:string | null){
    return this.http.get<Guide>(this.guideURL+'/'+id);
  }

  createGuide(guide: Guide){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Guide>(this.guideURL,JSON.stringify(guide),options)
  }

  updateGuide(guide: Guide){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Guide>(this.guideURL+'/'+guide._id,JSON.stringify(guide),options)
  }

  getCity(lat:any, lng:any)
  {
    return this.http.get("https://us1.locationiq.com/v1/reverse.php?key=pk.b6b435856c0adb985b6e8de885b2ae7b&lat=" + lat + "&lon=" + lng + "&format=json")
  }
}
