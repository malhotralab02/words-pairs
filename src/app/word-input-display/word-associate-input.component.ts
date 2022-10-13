import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { randomInt } from 'crypto';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { WordDirective } from '../word.directive';

@Component({
  selector: 'app-word-associate-input',
  template: `
  <div>
    <ng-template wordHost>
    </ng-template>
  </div>
`
})
export class WordAssociateInputComponent implements OnInit, OnDestroy {
  @Input() wordsInput: AddWord[] = [];

  constructor() { }

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getWordsInputOne();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


  loadComponent() {

    /*function shuffle(list) {
      return list.reduce((p, n) => {
        const size = p.length;
        const index = Math.trunc(Math.random() * (size - 1));
        p.splice(index, 0, n);
        return p;
      }, []);
    };*/

    

    if (this.counter < this.wordsInput.length) {
      //this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsInput.length;
      this.wordsInput.sort(() => Math.random() - Math.random()).slice(0,1);
      //const intersection = array1.filter(element => array2.includes(element));
      this.currentAdIndex = Math.floor((this.currentAdIndex + 1) % this.wordsInput.length);
      const addWordInput = this.wordsInput[this.currentAdIndex];

      //console.log("My test", this.wordsInput[this.currentAdIndex]);

      //console.log ("Find the word", this.wordsInput);

      //alert(this.wordsInput[this.currentAdIndex].data.listone);
      console.log("random", this.wordsInput.sort(() => Math.random() - Math.random()).slice(0,1));


      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      this.counter++;

      //console.log("more test", componentRef.instance.data);
      
    }
  }

  getWordsInputOne() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 5000);
  }
}

