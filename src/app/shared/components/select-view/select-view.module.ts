import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectViewComponent } from './select-view.component';



@NgModule({
  declarations: [SelectViewComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectViewComponent]
})
export class SelectViewModule { }
