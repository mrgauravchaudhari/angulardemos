import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myForm', { static: true }) myForm: any;
  constructor() { }

  ngOnInit(): void { }

  onSubmit(myForm: any) {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
