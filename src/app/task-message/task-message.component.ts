import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-message',
  templateUrl: './task-message.component.html',
  styleUrls: ['./task-message.component.css']
})
export class TaskMessageComponent implements OnInit {
  //text = ''; //initialised the text variable

  constructor() { }

  ngOnInit(): void {
  }

  /*onKeyUp(x) { // appending the updated value to the variable
    this.text += x.target.value + ' | ';
  }*/

}
