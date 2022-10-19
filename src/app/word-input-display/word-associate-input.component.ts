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
export class WordAssociateInputComponent implements OnInit, OnDestroy, WordComponent {
  @Input() wordsInput: AddWord[] = [];
  @Input() data: any;

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
    if (this.counter < this.wordsInput.length) {
     
      if (this.wordsInput.length === 0){
        alert("The right Word is ");
        
      }
      
      //this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsInput.length;

      //Show random words
      this.wordsInput.sort(() => Math.random() - Math.random()).slice(0,1);
      //const intersection = array1.filter(element => array2.includes(element));
      this.currentAdIndex = Math.floor((this.currentAdIndex + 1) % this.wordsInput.length);
      const addWordInput = this.wordsInput[this.currentAdIndex];

      console.log("We are at the end of the list", this.wordsInput.length);

      //console.log ("Find the word", this.wordsInput);

      console.log("My second word",this.wordsInput[this.currentAdIndex].data.listonesec);
      //console.log("random", this.wordsInput.sort(() => Math.random() - Math.random()).slice(0,1));
      
      //const input = document.getElementById('message') as HTMLInputElement | null;


      //const value = input?.value;
      //console.log("my value", value) // "Initial value"

      
      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      this.counter++;

      //console.log("more test", componentRef.instance.data);
      
    }
  }
  //set the interval to minutes 
  getWordsInputOne() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 8000);
  }
  
}

