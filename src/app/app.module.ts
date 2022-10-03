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
    WordDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

