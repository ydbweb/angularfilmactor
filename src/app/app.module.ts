import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { filmactorService } from './datasource.service';
import { FormactorComponent } from './formactor/formactor.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    FormactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [filmactorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
