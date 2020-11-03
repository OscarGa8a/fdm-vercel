import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from './product-detail.component';
import {ProductDetailModule} from '../../modules/product-detail/product-detail.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
      path: ':id',
      component: ProductDetailComponent
    }
    ];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDetailPageModule { }
