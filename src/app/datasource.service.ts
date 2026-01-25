import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class filmactorService {

  baseUrl:string = "http://localhost:8080/filmactor";
  constructor(private httpClient : HttpClient) { }

  getActors() {
    return this.httpClient.get(this.baseUrl+'/api/actors');
  }

  getFilms(actor_id: Number) {
    return this.httpClient.get(this.baseUrl+'/api/actors/actorid/'+actor_id);
  }


}