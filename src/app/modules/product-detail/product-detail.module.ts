import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { ProductSliderFourteenComponent } from './product-slider/product-slider.component';
import { ProductModule } from '../../shared/components/product/product.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';
import { ProductTagsComponent } from './product-tags/product-tags.component';
import { DirectiveModule } from '../../shared/directives/directive.module';


@NgModule({
  declarations: [
      /*pasar a home el sliderFourteen*/
    ProductSliderFourteenComponent,
      ProductViewComponent,
      ProductSpecificationsComponent,
      ProductTagsComponent,
  ],
    imports: [
        CommonModule,
        SlickCarouselModule,
        RouterModule,
        ProductModule,
        DirectiveModule,
    ],
  exports: [
      ProductSliderFourteenComponent,
      ProductViewComponent,
      ProductSpecificationsComponent,
      ProductTagsComponent,
  ]
})
export class ProductDetailModule { }
