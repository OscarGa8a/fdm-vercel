import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';



@NgModule({
  declarations: [GridViewComponent],
  imports: [
    CommonModule
  ],
  exports: [GridViewComponent]
})
export class GridViewModule { }
