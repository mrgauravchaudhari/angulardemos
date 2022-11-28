import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgOnInitRoutingModule, RoutingComponents } from './ng-onInit-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgOnInitRoutingModule],
  exports: [CommonModule, FormsModule, NgOnInitRoutingModule],
})
export class NgOnInitModule {

  constructor() {
    console.warn("OnInit Module Is Called...");
  }

}
