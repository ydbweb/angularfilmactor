import { Component, Input, Output, EventEmitter } from '@angular/core';
import { filmactorService } from '../datasource.service';
import { FormBuilder } from '@angular/forms';
import { Actor } from '../actor';
import { Filmsform } from 'app/filmforms';

@Component({
    selector: 'app-formactor',
    templateUrl: './formactor.component.html',
    styleUrls: ['./formactor.component.css'],
    standalone: false
})
export class FormactorComponent {
  actor:Actor= {firstName: '', lastName: '', actorId: 1};
  filmforms: Filmsform = {filmsform: [], filmsformactor: []};
  films:any = [];
  filmsFromActor:any = [];

  constructor(private filmactorService : filmactorService,
              private formBuilder: FormBuilder) {

  }

  filmformsdata = this.formBuilder.group({
    filmsform: [],
    filmsformactor: []
  });

  actordata = this.formBuilder.group({
    actorId  : 0,
    firstName: '',
    lastName: '',
    filmsform: ''
  });  

   saveActorData(): void {
      this.filmactorService.putActor(this.actor.actorId, this.actordata.value).subscribe((res : any)=>{  
        console.log("Actor data saved successfully.");
      });
      console.warn('Your order has been submitted', this.actordata.value);

    }

    addFilmsToActor(): void {
      console.log(this.filmformsdata.value);
      this.filmactorService.putActorFilms(this.actor.actorId, this.filmformsdata.value).subscribe((res : any)=>{  
        this.filmformsdata.reset()
        this.getfilms();
      });
      console.warn('Your order has been submitted 2', this.filmformsdata.value)
    }


   @Input() 
   set setActor  (value: any) {
      this.actor=value;
      this.getfilms();
      this.actordata.patchValue({
        actorId  : this.actor.actorId,
        firstName: this.actor.firstName,
        lastName: this.actor.lastName
      });
   }

    getfilms(notfirestload: boolean=true) {
      this.filmactorService.getAllFilms().subscribe((res1 : any)=>{
        this.films = res1;
        this.filmactorService.getFilms(this.actor.actorId).subscribe((res : any)=>{ 
          for (let i=0;i<res.length;i++) {
           this. filmsFromActor[i]= res[i].filmId; 
          }
          res=this.films.filter((film:  any) => !this.filmsFromActor.includes(film.filmId));
          this. filmsFromActor=this.films.filter((film:  any) => this.filmsFromActor.includes(film.filmId)); 
          this.films=res;
           
          
        });   
      
    });
  }
}