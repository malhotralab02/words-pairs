import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { WordDirective } from './word.directive';
import { AddWord } from './add-word';
import { WordComponent } from './word.component';
import { WordService } from './word.service';
@Component({
  selector: 'app-word-associate',
  template: `
    <div class="word-class">
      <ng-template wordHost></ng-template>
    </div>
  `
})
export class WordAssociateComponent implements OnInit, OnDestroy {
  @Input() words: AddWord[] = [];

  constructor(private wordService: WordService) {}

  currentAdIndex = -1;

  @ViewChild(WordDirective, {static: true}) wordHost!: WordDirective;
  interval: number|undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getWords();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.words.length;
    const addWord = this.words[this.currentAdIndex];

    const viewContainerRef = this.wordHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<WordComponent>(addWord.component);
    componentRef.instance.data = addWord.data;
  }

  getWords() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
