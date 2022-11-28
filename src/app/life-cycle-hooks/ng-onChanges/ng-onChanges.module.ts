import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { NgOnChangesRoutingModule, RoutingComponents } from './ng-onChanges-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, NgOnChangesRoutingModule],
  exports: [CommonModule, FormsModule, NgOnChangesRoutingModule],
})
export class NgOnChangesModule {

  constructor() {
    console.warn("OnChanges Module Is Called...");
  }

}
