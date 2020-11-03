import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import {DirectiveModule} from '../../../../shared/directives/directive.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RadioBFilterModule} from '../../../../shared/components/radio-bfilter/radio-bfilter.module';



@NgModule({
    declarations: [MaterialsComponent],
    exports: [
        MaterialsComponent
    ],
    imports: [
        CommonModule,
        DirectiveModule,
        ReactiveFormsModule,
        RadioBFilterModule
    ]
})
export class MaterialsModule { }
