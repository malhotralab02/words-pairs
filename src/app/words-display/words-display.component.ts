import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';
import { AddWord } from '../add-word';

@Component({
  selector: 'words-display',
  templateUrl: './words-display.component.html',
  styleUrls: ['./words-display.component.css']
})
export class WordsDisplayComponent implements OnInit {
words: AddWord[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.words = this.wordService.getWords();
  }

}
