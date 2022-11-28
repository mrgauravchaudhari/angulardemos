import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  formName: string = '';

  constructor() {
    console.warn("Parent Constructor Is Called !!");
  }

  ngOnInit(): void {
    console.warn("Parent OnInit Is Called !!");
  }

}
