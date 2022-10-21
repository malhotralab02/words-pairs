import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WordComponent } from '../word.component';

import Swal from 'sweetalert2';
import { BehaviorSubject, Subject, switchMap, pipe } from 'rxjs';
import { AddWord } from '../add-word';
import { count } from 'console';

@Component({
  selector: 'app-word-list-input-one',
  templateUrl: './word-list-input-one.component.html',

})
export class WordListInputOneComponent implements WordComponent {
  @Input() wordsInput: AddWord[] = [];
  @Input() data: any;
  @Input() newData: string[] = [];
  newValue: string | undefined;
  count = 0;
  totalCount = 0;
  
  
  trackByFn(index: any, item: any) {
    return index; 
  }

  

  
  currentAdIndex = -1;
  interval: number | undefined;
   //correct = "The correct word is ";

  inputForm!: FormGroup;
  event!:any;
  myWord: string = '';
  myuserInput: string = '';
  myuserInputsTest: string = '';
  correctWord: string = '';
  errorMessage: string = '';
  multiSelect: boolean = true;
  
  constructor(private myForm: FormBuilder){ }

  
  
  //@ViewChild('userInput') userInput!: ElementRef ;
  //@ViewChild('userInputs', {static: true}) usernameElement: ElementRef;
  userInputs: string = "";
  //@ViewChild('entry') entry: ElementRef | undefined;

  
  

  ngOnInit() {
    this.inputForm = this.myForm.group({
      userInputs: ''
    });
    
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
      // Test wheter myuserInput is empty, but not None 
      if (myuserInput === ''){
        this.errorMessage = "The correct word is " + myWord;
        this.multiSelect = false;
        //console.log(this.multiSelect = false);
        //console.log("Service Input ", this.myWord);
      //console.log("User Input ", this.myuserInput);
        //return this.multiSelect = false;
        
        //confirm("The correct word is !"+myWord);
        //this.message.style.color = "red"
        //alert("The correct word is " + myWord);
        console.log("The correct word is " + myWord);
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
      this.multiSelect = false;
      //console.log(this.multiSelect = false);
      //return this.multiSelect = false;
      //alert("Not " + myuserInput + ", the correct word is " + myWord);
      console.log("Not " + myuserInput + ", the correct word is " + myWord);

      //this.getWordsInputOne();
      }
    else if (myWord === myuserInput){  
      this.correctWord = "Correct answer";
      //console.log(this.multiSelect);
      //return this.multiSelect = true;
      //alert("Correct answer"); 
      //this.getWordsInputOne();
    
    }

    //console.log(this.multiSelect);
    //console.log("We are at the end of the list", this.wordsInput.length);
    /**else if(userInput === this.empty || myWord != userInput){
      alert("Wrong word, the correct word is " + myWord);
      //return myWord;
      //console.log("the right wordis ", myWord);
    } */
    //this.getWordsInputOne();
    //return setInterval(onEnter(), 1000);
    //this.getWordsInput();
    //console.log("The intervale is ", this.interval);

    
    

    //this.getWordsInputOne();
    this.store;
  
    return this.multiSelect;
    
  };

  store(newValue: string){
    if(this.multiSelect == true){
      this.newData.push(newValue);
      this.count ++;
      console.log("Boolean value :", this.multiSelect);
    }
    for (let i = 0; i < this.newData.length; i++) {
      if (this.newData[i] === '0') this.count++;
    }
   //this.totalCount = ++this.count;
    console.log("The count is :", this.count);
    console.log("Show me more data",this.newData.length);
   
    
  }

  /*store(){
     (myuserInput: string) => {
    const result: string[] = []
    result.push(myuserInput)
    console.log("My results ", result);
  }
}*/
  
  arrayCreated = console.log("Finding the lenght of user inputs ", [this.multiSelect]);
  //count = this.arrayCreated.filter(Boolean).length;

  //Populate array with input values
  //Find the lenght of myWord
  getWordsInputOne() {
    this.interval = window.setInterval(() => {
      this.onEnter(this.myWord, this.myuserInput);
    }, 1000);
  }
}
