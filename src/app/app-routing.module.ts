import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagePageComponent } from './message-page/message-page.component';
import { WordsDisplayComponent } from './words-display/words-display.component'; 

const routes: Routes = [

  { path: '', redirectTo: '/app-message-page', pathMatch: 'full' },
  { path: 'app-message-page', component: MessagePageComponent },
  { path: 'word-display', component: WordsDisplayComponent },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

