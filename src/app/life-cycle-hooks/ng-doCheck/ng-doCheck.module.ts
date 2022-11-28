import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgDoCheckRoutingModule, RoutingComponents } from './ng-doCheck-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgDoCheckRoutingModule],
  exports: [CommonModule, FormsModule, NgDoCheckRoutingModule],
})
export class NgDoCheckModule {

  constructor() {
    console.warn("DoCheck Module Is Called...");
  }

}
