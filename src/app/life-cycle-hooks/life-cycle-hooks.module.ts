import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';

@NgModule({
  declarations: [LifeCycleHooksComponent],
  imports: [CommonModule, FormsModule, LifeCycleHooksRoutingModule],
  exports: [CommonModule, FormsModule, LifeCycleHooksRoutingModule],
})
export class NgLifeCycleHooksModule {

  constructor() {
    console.warn("Life Cycle Hooks Module Is Called...");
  }

}
