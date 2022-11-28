import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgAfterViewRoutingModule, RoutingComponents } from './ng-afterView-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgAfterViewRoutingModule],
  exports: [CommonModule, FormsModule, NgAfterViewRoutingModule],
})
export class NgAfterViewModule {

  constructor() {
    console.warn("AfterView Module Is Called...");
  }

}
