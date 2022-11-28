import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgOnDestroyRoutingModule, RoutingComponents } from './ng-onDestroy-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgOnDestroyRoutingModule],
  exports: [CommonModule, FormsModule, NgOnDestroyRoutingModule],
})
export class NgOnDestroyModule {

  constructor() {
    console.warn("OnDestroy Module Is Called...");
  }

}
