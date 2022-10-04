import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputWordComponent } from './input-word/input-word.component';
import { Lits1Component } from './lits1/lits1.component';
import { Lits3Component } from './lits3/lits3.component';
import { Lits5Component } from './lits5/lits5.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { WordsDisplayComponent } from './words-display/words-display.component'; 

const routes: Routes = [

  { path: 'app-main-page', component: MainPageComponent },
  { path: 'app-lits1', component: Lits1Component},
  { path: 'app-list3', component: Lits3Component},
  { path: 'app-list5', component: Lits5Component},
  { path: 'app-message-page', component: MessagePageComponent },
  { path: 'word-display', component: WordsDisplayComponent },
  { path: 'input-word-message', component: InputWordComponent},
  { path: '',
    redirectTo: '/app-main-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

