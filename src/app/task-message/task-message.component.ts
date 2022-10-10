import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
//import { InputTaskComponent } from '../input-task/input-task.component';

@Component({
  selector: 'task-message',
  templateUrl: './task-message.component.html',
  styleUrls: ['./task-message.component.css'],
})
export class TaskMessageComponent implements OnInit {
  //text = ''; //initialised the text variable
 //myApp = angular.module('myApp',[]);
 @HostListener('window:keydown.space', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    window.location.href = '/app-input-task';
    //alert('Key was pressed');
  }

  constructor() { }

  ngOnInit(): void {
  }
  

  /*onKeydown(event: any) {
    console.log(event);
  }*/

  /*onKeyUp(x) { // appending the updated value to the variable
    this.text += x.target.value + ' | ';
  }*/

}
function preventDefault() {
  throw new Error('Function not implemented.');
}

