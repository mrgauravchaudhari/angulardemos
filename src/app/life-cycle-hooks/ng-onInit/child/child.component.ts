import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  constructor() {
    console.warn('Child Constructor Is Called !!');
  }

  ngOnInit(): void {
    console.warn(`Child OnInit Is Called !!`);
  }

}
