import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeComponent } from './size.component';
import {ShopModule} from '../../shop.module';
import {DirectiveModule} from '../../../../shared/directives/directive.module';



@NgModule({
  declarations: [SizeComponent],
    imports: [
        CommonModule,
        DirectiveModule
    ],
  exports: [SizeComponent]
})
export class SizeModule { }
