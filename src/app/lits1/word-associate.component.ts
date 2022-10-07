import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WordDirective } from '../word.directive';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-associate',
  template: `
  <div class="word-class">
  <ng-template wordHost></ng-template>
  <div class="a-bunch-of-styles-for-my-button">
    <button class="more-styles" 
    [disabled]="nextClick" 
    [routerLink]="['/task-message']" href="">Next</button>
</div>
</div>
  `
})
export class WordAssociateComponent implements OnInit, OnDestroy {
  @Input() words: AddWord[] = [];

  nextClick = true;

  constructor() { }

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getWordsOne();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  loadComponent() {

    if (this.counter < this.words.length) {

    this.currentAdIndex = (this.currentAdIndex + 1) % this.words.length;
    const addWord = this.words[this.currentAdIndex];

    const viewContainerRef = this.wordHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<WordComponent>(addWord.component);
    componentRef.instance.data = addWord.data;
    this.counter++;
      
      if (this.counter == this.words.length) {
        this.nextClick = false;
        console.log("button", this.nextClick);
      }
  }
  else {
    return;
  }
}

  getWordsOne() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
