import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WordAssociateComponent } from './lits1/word-associate.component'; 
import { WordsDisplayComponent } from './lits1/words-display.component'; 
import { MessagePageComponent } from './message-page/message-page.component';
import { TotalPercentageComponent } from './total-percentage/total-percentage.component';
import { TaskMessageComponent } from './task-message/task-message.component';

import { WordDirective } from './word.directive';
import { WordService } from './word.service'; 
import { Lits1Component } from './lits1/lits1.component';
import { Lits3Component } from './lits3/lits3.component';
import { Lits5Component } from './lits5/lits5.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WordThreeDisplayComponent } from './lits3/word-three-display.component';
import { WordFiveDisplayComponent } from './lits5/word-five-display.component';
import { WordAssociateThreeComponent } from './lits3/word-associate-three.component';
import { WordAssociateFiveComponent } from './lits5/word-associate-five.component';
import { MessageThreeComponent } from './message-three/message-three.component';
import { MessageFiveComponent } from './message-five/message-five.component';
import { WordListThreeComponent } from './lits3/word-list-three.component';
import { WordListFiveComponent } from './lits5/word-list-five.component';
import { InputTaskComponent } from './input-task/input-task.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule
  ],
  providers: [ WordService],
  declarations: [
    AppComponent, 
    WordAssociateComponent,
    WordsDisplayComponent,
    MessagePageComponent,
    TotalPercentageComponent,
    WordDirective,
    Lits1Component,
    Lits3Component,
    Lits5Component,
    MainPageComponent,
    WordThreeDisplayComponent,
    WordFiveDisplayComponent,
    WordAssociateThreeComponent,
    WordAssociateFiveComponent,
    MessageThreeComponent,
    MessageFiveComponent,
    WordListThreeComponent,
    WordListFiveComponent,
    TaskMessageComponent,
    InputTaskComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

