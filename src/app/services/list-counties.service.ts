import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCountiesService {

  constructor(private http:HttpClient) {

   }
   getCounties():Observable<any>{
     return this.http.get("https://jonmidapisegundocorte.herokuapp.com/worldcup");
   }
}
