import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }   from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { Logger } from "angular2-logger/core";

import { AppComponent }  from './app.component';
import { HelloWorldComponent } from './helloworld.component'
//import { HeroesComponent }  from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpModule,
    AppRoutingModule
  ],
  providers: [ 
    Logger
  ],  
  declarations: [
    AppComponent,
    HelloWorldComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(private logger: Logger) {
    this.logger.level = this.logger.Level.DEBUG;
  }
}