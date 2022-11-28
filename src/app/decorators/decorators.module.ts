import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { InputOutputRoutingModule, RoutingComponents } from './decorators-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, InputOutputRoutingModule],
  exports: [CommonModule, FormsModule, InputOutputRoutingModule],
})
export class NgDecoratorsModule {

  constructor() {
    console.warn("Angular Decorators Module Called...");
  }

}
