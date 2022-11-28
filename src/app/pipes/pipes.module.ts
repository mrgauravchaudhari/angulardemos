import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [PipesComponent, InitialsPipe],
  imports: [CommonModule, FormsModule, PipesRoutingModule],
  exports: [CommonModule, FormsModule, PipesRoutingModule],
})
export class NgPipesModule {

  constructor() {
    console.warn("Life Cycle Hooks Module Is Called...");
  }

}
