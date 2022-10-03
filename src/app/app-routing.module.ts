import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputWordComponent } from './input-word/input-word.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { WordsDisplayComponent } from './words-display/words-display.component'; 

const routes: Routes = [

  //{ path: '', redirectTo: '/app-message-page', pathMatch: 'full' },
  { path: 'app-message-page', component: MessagePageComponent },
  { path: 'word-display', component: WordsDisplayComponent },
  { path: 'input-word-message', component: InputWordComponent},
  { path: '',
    redirectTo: '/app-message-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

