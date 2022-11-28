import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  @Input() items: any = []; 

  @Output() selectedItemEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  selectItem(item: any) {
    console.log("From child : ", item);
    this.selectedItemEmitter.emit(item);
  }

}
