import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      readTerms: new FormControl(false)
    }
  );

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void { }


  onSubmit() {
    console.log(this.myForm.value);

    this.service.login(this.myForm.value).subscribe(
      (resLogin: any) => {
        console.log(resLogin);
        if (resLogin != undefined) {
          localStorage.setItem('token', resLogin.token);
          this.router.navigateByUrl('/app/home');
          this.myForm.reset();
        }
      },(error) => {
        console.log(error);        
      });

  }

  accept() {
    this.myForm.setValue({ readTerms: true });
  }

}
