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

  getAllFilms() {
    return this.httpClient.get(this.baseUrl+'/api/films/all');
  }  

  putActor(actorid : number, res : any) {
    console.log("Updating actor with ID:", actorid, "with data:", res);
    return this.httpClient.put(this.baseUrl+'/api/actors/'+actorid, res);
  }

  putActorFilms(actorid : number, res : any) {
    console.log("Updating actor with ID:", actorid, "with data:", res);
    return this.httpClient.put(this.baseUrl+'/api/actors/addtoactor/'+actorid, res);
  }  


}