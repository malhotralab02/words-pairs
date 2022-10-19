import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WordComponent } from '../word.component';

import Swal from 'sweetalert2';
import { BehaviorSubject, Subject, switchMap, pipe } from 'rxjs';
import { AddWord } from '../add-word';

@Component({
  selector: 'app-word-list-input-one',
  templateUrl: './word-list-input-one.component.html',

})
export class WordListInputOneComponent implements WordComponent {
  @Input() wordsInput: AddWord[] = [];
  listOfInputs = [];

  currentAdIndex = -1;
  interval: number | undefined;
   //correct = "The correct word is ";

  inputForm!: FormGroup;
  event!:any;
  myWord: string = '';
  myuserInput: string = '';
  correctWord: string = '';
  errorMessage: string = '';
  multiSelect: boolean = true;
  
  constructor(private myForm: FormBuilder){ }

  
  @Input() data: any;
  //@ViewChild('userInput') userInput!: ElementRef ;
  //@ViewChild('userInputs', {static: true}) usernameElement: ElementRef;
  userInputs: string = "";
  //@ViewChild('entry') entry: ElementRef | undefined;

  
  

  ngOnInit() {
    this.inputForm = this.myForm.group({
      userInputs: ''
    })
    
  }
  

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    /*if (this.interval) {
      clearInterval(this.interval);
    }*/
  }


 
  /*onEnter(e: { stopPropagation: () => void; preventDefault: () => void; }) {
    this.userInput.nativeElement.focus();
    e.stopPropagation();
    e.preventDefault();
    console.log('click inside input');
    this.onSubmit(this.data.listonesec,this.data.userInputs);
    console.log("User Input ", this.data.userInputs);
    return false;
}*/
 //Funtion with condition for different scenarios
  onEnter(myWord: string , myuserInput:string) {
    console.log("User Input ", myuserInput);
      console.log("right answer is ", myWord);
      // Test wheter myuserInput is empty, but not None 
      if (myuserInput === ''){
        this.errorMessage = "The correct word is " + myWord;
        console.log(this.multiSelect = false);
        //return this.multiSelect = false;
        
        //confirm("The correct word is !"+myWord);
        //this.message.style.color = "red"
        //alert("The correct word is " + myWord);
        // Information

        /*Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nothing to copy!'
        })
       // this.getWordsInputOne();
      }*/
      // Test whether strValue is empty or is None
   /* if (strValue) {
      //do something*/
    }
     else if( myuserInput != myWord){
      this.errorMessage = "INCORRECT!, not " + "'"+myuserInput+"'" + ", the correct word is " + myWord;
      console.log(this.multiSelect = false);
      //return this.multiSelect = false;
      //alert("Not " + myuserInput + ", the correct word is " + myWord);
      //this.getWordsInputOne();
      }
    else if (myWord === myuserInput){  
      this.correctWord = "Correct answer";
      console.log(this.multiSelect);
      //return this.multiSelect = true;
      //alert("Correct answer"); 
      //this.getWordsInputOne();
    
    }

    //console.log(this.multiSelect);
    console.log("We are at the end of the list", this.wordsInput.length);
    /**else if(userInput === this.empty || myWord != userInput){

      alert("Wrong word, the correct word is " + myWord);
      //return myWord;
      //console.log("the right wordis ", myWord);
    } */
    //this.getWordsInputOne();
    //return setInterval(onEnter(), 1000);
    //this.getWordsInput();
    console.log("The intervale is ", this.interval);

    console.log("Finding the lenght ", this.myWord.length)
    

    //this.getWordsInputOne();
    console.log("Here is my boolena answer ", this.multiSelect);
    return this.multiSelect;
    
    
  };


  //Populate array with input values
  //Find the lenght of myWord
  getWordsInputOne() {
    this.interval = window.setInterval(() => {
      this.onEnter(this.myWord, this.myuserInput);
    }, 1000);
  }
}



