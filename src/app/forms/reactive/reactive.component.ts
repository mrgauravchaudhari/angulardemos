import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm = new FormGroup(
    {
      uname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      readTerms: new FormControl(false)
    }
  );

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();

  }

  accept() {
    this.myForm.setValue({ readTerms: true });
  }

}
