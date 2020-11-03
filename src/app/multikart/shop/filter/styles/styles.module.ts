import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles.component';
import {RadioBFilterModule} from '../../../../shared/components/radio-bfilter/radio-bfilter.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../../../../shared/directives/directive.module';



@NgModule({
    declarations: [StylesComponent],
    exports: [
        StylesComponent
    ],
    imports: [
        CommonModule,
        RadioBFilterModule,
        ReactiveFormsModule,
        DirectiveModule
    ]
})
export class StylesModule { }
