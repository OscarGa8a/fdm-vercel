import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBFilterComponent } from './radio-bfilter.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RadioBFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [RadioBFilterComponent]
})
export class RadioBFilterModule { }
