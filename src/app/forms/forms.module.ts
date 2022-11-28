import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule, RoutingComponents } from './forms-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [CommonModule, FormsModule, FormsRoutingModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, FormsRoutingModule, ReactiveFormsModule],
})
export class NgFormsModule {

  constructor() {
    console.warn("Angular Forms Module Called...");
  }

}
