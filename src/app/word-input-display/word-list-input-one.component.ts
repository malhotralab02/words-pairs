import { Component, Input, OnInit } from '@angular/core';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-list-input-one',
  templateUrl: './word-list-input-one.component.html',
})
export class WordListInputOneComponent implements WordComponent {
  @Input() data: any;

  //randomIndex = Math.floor(Math.random() * textArray.length); 
  //randomElement = textArray[randomIndex];

}
