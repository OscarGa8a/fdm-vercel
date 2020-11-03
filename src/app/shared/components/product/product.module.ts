import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductBoxComponent} from './product-box/product-box.component';
import {ProductBoxHoverComponent} from './product-box-hover/product-box-hover.component';
import {ProductBoxVerticalComponent} from './product-box-vertical/product-box-vertical.component';
import {ProductBoxMetroComponent} from './product-box-metro/product-box-metro.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    ProductBoxComponent,
    ProductBoxHoverComponent,
    ProductBoxVerticalComponent,
    ProductBoxMetroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductComponent,
    ProductBoxComponent,
    ProductBoxHoverComponent,
    ProductBoxVerticalComponent,
    ProductBoxMetroComponent
  ]
})
export class ProductModule { }
