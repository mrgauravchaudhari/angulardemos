import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgAfterContentRoutingModule, RoutingComponents } from './ng-afterContent-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgAfterContentRoutingModule],
  exports: [CommonModule, FormsModule, NgAfterContentRoutingModule],
})
export class NgAfterContentModule {

  constructor() {
    console.warn("AfterContent Module Is Called...");
  }

}
