import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSortingComponent } from './select-sorting.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [SelectSortingComponent],
    exports: [
        SelectSortingComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SelectSortingModule { }
