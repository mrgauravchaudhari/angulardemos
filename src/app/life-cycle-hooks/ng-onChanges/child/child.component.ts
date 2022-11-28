import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() formName: string = '';

  constructor() {
    console.warn('Child Constructor Is Called !!');
  }

  ngOnInit(): void {
    console.warn('Child OnInit Is Called !!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.warn('Child OnChanges Is Called !!');
  }

  ngOnDestroy(): void {
    console.error('Child OnDestroy Is Called !!');
  }

}
