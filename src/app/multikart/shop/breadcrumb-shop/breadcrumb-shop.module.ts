import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbShopComponent } from './breadcrumb-shop.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [BreadcrumbShopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BreadcrumbShopComponent]
})
export class BreadcrumbShopModule { }
