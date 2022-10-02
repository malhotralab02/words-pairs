import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WordService } from './word.service';
import { AddWord } from './add-word';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {

  //words: AddWord[] = [];

  constructor(
    private router: Router,
  ) {}

  //constructor(private wordService: WordService) {}

  ngOnInit() {
    //this.words = this.wordService.getWords();
  }
}

