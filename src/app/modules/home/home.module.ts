import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderFourteenComponent } from './slider/slider.component';
import { AboutFourteenComponent } from './about/about.component';
import { CollectionBannerFourteenComponent } from './collection-banner/collection-banner.component';
import { InformationComponent } from './information/information.component';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductTabFourteenComponent } from './product-tab/product-tab.component';
import { ProductModule } from '../../shared/components/product/product.module';


@NgModule({
  declarations: [
    SliderFourteenComponent,
    AboutFourteenComponent,
    CollectionBannerFourteenComponent,
    InformationComponent,
    ProductTabFourteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    ProductModule
  ],
  exports: [
    SliderFourteenComponent,
    AboutFourteenComponent,
    CollectionBannerFourteenComponent,
    InformationComponent,
    ProductTabFourteenComponent
  ]
})
export class HomeModule { }
