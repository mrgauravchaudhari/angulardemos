import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy {

  Counter = 0;
  Interval: any;

  constructor() {
    console.warn('Child Constructor Is Called !!');
  }

  ngOnInit(): void {
    console.warn('Child OnInit Is Called !!');

    this.Interval = setInterval(() => {
      this.Counter = this.Counter + 1;
      console.log("Counter Value : ", this.Counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.Interval);

    console.error('Child OnDestroy Is Called !!');
  }

}
