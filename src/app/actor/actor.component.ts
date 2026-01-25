import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import { filmactorService } from '../datasource.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-actor',
    templateUrl: './actor.component.html',
    styleUrls: ['./actor.component.css'],
    standalone: false
})
export class ActorComponent {
  actors:any = [];
  actor_id:any = 1;
  films:any = [];
  film_id:any = 1;
  filmresult:any = [];
  filmContent:any = [];
  actid:any;
  filmid:any;

  constructor(private filmactorService : filmactorService) {

  }

    addItem(newItem: number) {
    alert(newItem);
  }


  ngOnInit(): void {
     this.getActors();  

  }

  getActors() {
    this.filmactorService.getActors().subscribe((res : any)=>{
      this.actors = res;
      this.getfilms()
    });
  }

  getfilms(notfirestload: boolean=true) {
    this.filmactorService.getFilms(this.actor_id).subscribe((res : any)=>{
      if (notfirestload) 
        this.film_id=res[0].filmId; 

      this.films = res;      
      this.filmContent=this.films.filter((film:  any) => film.filmId == this.film_id);
      this.filmContent=this.filmContent[0];
      console.log(this.filmContent.language);
      
    });
  }

  changeActor(val : any){
    this.actor_id=val;
    this.getActors();
  }

   changefilm(val : any){
    this.film_id=val;
    this.getfilms(false);
  }
}
