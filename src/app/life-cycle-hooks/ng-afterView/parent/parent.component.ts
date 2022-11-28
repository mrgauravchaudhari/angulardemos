import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck {

  formName: string = '';

  constructor() {
    console.warn("Parent Constructor Is Called !!");
  }

  ngOnInit(): void {
    console.warn("Parent OnInit Is Called !!");
  }

  ngDoCheck(): void {
    console.warn("Parent DoCheck Is Called !!");
  }

}
