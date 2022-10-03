import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-word-message',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css']
})
export class InputWordComponent implements OnInit {
  //text = ''; //initialised the text variable

  constructor() { }

  ngOnInit(): void {
  }

  /*onKeyUp(x) { // appending the updated value to the variable
    this.text += x.target.value + ' | ';
  }*/

}
