import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  constructor(private router: Router) { }

  goToTemplateDriven() {
    this.router.navigate(['template-driven']);
  }

  goToModelDriven() {
    this.router.navigate(['model-driven']);
  }
}

