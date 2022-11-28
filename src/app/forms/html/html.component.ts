import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  myForm = new FormGroup(
    {
      description: new FormControl(''),
      email: new FormControl(''),
      file: new FormControl(''),
      person: new FormControl(''),
      gender: new FormControl(''),
      condition: new FormControl(true)
    }
  );

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {

    console.log(this.myForm.value);
  }

  accept() {
    this.myForm.setValue({ readTerms: true });
  }

}
