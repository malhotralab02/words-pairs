import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WordAssociateComponent } from './word-associate.component'; 
import { WordsDisplayComponent } from './words-display/words-display.component'; 
import { MessagePageComponent } from './message-page/message-page.component';
import { InputWordComponent } from './input-word/input-word.component'; 
import { TotalPercentageComponent } from './total-percentage/total-percentage.component';

import { WordDirective } from './word.directive';
import { WordService } from './word.service';
import { Lits1Component } from './lits1/lits1.component';
import { Lits3Component } from './lits3/lits3.component';
import { Lits5Component } from './lits5/lits5.component';
import { MainPageComponent } from './main-page/main-page.component';

//import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [ BrowserModule, AppRoutingModule
  ],
  providers: [ WordService ],
  declarations: [
    AppComponent, 
    WordAssociateComponent,
    WordsDisplayComponent,
    MessagePageComponent,
    InputWordComponent ,
    TotalPercentageComponent,
    WordDirective,
    Lits1Component,
    Lits3Component,
    Lits5Component,
    MainPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

