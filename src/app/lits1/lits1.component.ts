import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lits1',
  templateUrl: './lits1.component.html',
  styleUrls: ['./lits1.component.css']
})
export class Lits1Component implements OnInit {

  data=[
    {
      name:"GeeksForGeeks",
      url:"www.geeksforgeeks.org"
    },
    {
      name:"Google",
      url:"www.google.com"
    },
    {
      name:"HackerRank",
      url:"www.hackerrank.com"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
