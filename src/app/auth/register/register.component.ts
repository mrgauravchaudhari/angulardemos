import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // FormGroup and FromControl Object Example
  RegisterForm = new FormGroup({
    FIRST_NAME: new FormControl('', [Validators['required'], Validators.pattern('[a-zA-Z0-9]+$')]),
    LAST_NAME: new FormControl(''),
    EMAIL: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ]),
    PWD: new FormControl(''),
    RPWD: new FormControl(''),
  },);

  // Array Example
  RegisterForm2: any = [];

  // FormBuilder Example
  RegisterForm3: any;

  constructor(private formBuilder: FormBuilder,) {
    this.RegisterForm2 = [{
      'FIRST_NAME': 'fdsfw',
      'LAST_NAME': 'fwef',
      'EMAIL': 'fwef',
      'PWD': 'wef',
      'RPWD': 'fwe',
    }];
    this.validation();
  }

  validation() {
    this.RegisterForm3 = this.formBuilder.group({
      FIRST_NAME: [''],
      LAST_NAME: [''],
      EMAIL: ['', [Validators.required, Validators.email]],
      PWD: [''],
      RPWD: [''],
    });
  }

  onSubmit() {
    console.log(this.RegisterForm);
    // console.log(this.RegisterForm2);
    // console.log(this.RegisterForm3);
  }

  get FIRST_NAME() {
    return this.RegisterForm.get('FIRST_NAME');
  }
  get EMAIL() {
    return this.RegisterForm.get('EMAIL');
  }

  change(value: any) {
    console.log(value.target.value);
  }
}


// '[a-zA-Z0-9]+$]'
// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#^_~])[A-Za-zd$@$!%*?&#^_~].{8,}
// ^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$
// ^[0-9]*$

// get FIRST_NAME() {
//   return this.RegisterForm.get('FIRST_NAME');
// }

// get EMAIL() {
//   return this.RegisterForm.get('EMAIL');
// }