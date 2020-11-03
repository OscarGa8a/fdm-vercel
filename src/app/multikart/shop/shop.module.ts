import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/*import { BarRatingModule } from 'ngx-bar-rating';*/
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxImgZoomModule } from 'ngx-img-zoom';
// Home-one profile
import { SliderComponent } from './home/slider/slider.component';
// Home-three profile
import { ProductTabThreeComponent } from './home/product-tab/product-tab.component';
// Home-four profile
import { ServicesFourComponent } from './home/services/services.component';
import { ParallaxBannerFourComponent } from './home/parallax-banner/parallax-banner.component';
// Home-five profile
import { LogoFiveComponent } from './home/logo/logo.component';
import { BannerComponent } from './home/banner/banner.component';
import { CollectionSliderComponent } from './home/collection-slider/collection-slider.component';
// home-eight profile
import { AboutUsComponent } from './home/about-us/about-us.component';
// Products Components
import { ShopComponent } from './shop.component';
import { ColorComponent } from './filter/color/color.component';
import { BrandComponent } from './filter/brand/brand.component';
import { PriceComponent } from './filter/price/price.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './filter/categories/categories.component';
import { ModalCartComponent } from './widgets/modal-cart/modal-cart.component';
import { NewProductComponent } from './widgets/new-product/new-product.component';
import { ExitPopupComponent } from './widgets/exit-popup/exit-popup.component';
import { AgeVerificationComponent } from './widgets/age-verification/age-verification.component';
import { NewsletterComponent } from './widgets/newsletter/newsletter.component';
import {TopBannerModule} from '../../shared/components/top-banner/top-banner.module';
import {BreadcrumbShopModule} from './breadcrumb-shop/breadcrumb-shop.module';
import {SizeModule} from './filter/size/size.module';
import {GridViewModule} from '../../shared/components/grid-view/grid-view.module';
import {SelectSortingModule} from '../../shared/components/select-sorting/select-sorting.module';
import {SelectViewModule} from '../../shared/components/select-view/select-view.module';
import {StylesModule} from './filter/styles/styles.module';
import {DirectiveModule} from '../../shared/directives/directive.module';
import {MaterialsModule} from './filter/materials/materials.module';
import {ProductModule} from '../../shared/components/product/product.module';

@NgModule({
    exports: [ExitPopupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShopRoutingModule,
        SharedModule,
        SlickCarouselModule,
        RangeSliderModule,
        InfiniteScrollModule,
        NgxPayPalModule,
        NgxImgZoomModule,
        TopBannerModule,
        BreadcrumbShopModule,
        SizeModule,
        GridViewModule,
        SelectSortingModule,
        SelectViewModule,
        StylesModule,
        DirectiveModule,
        MaterialsModule,
        ProductModule
    ],
  declarations: [
    // Home one
    SliderComponent,
    // Home three
    ProductTabThreeComponent,
    // Home four
    ServicesFourComponent,
    ParallaxBannerFourComponent,
    // Home five
    LogoFiveComponent,
    BannerComponent,
    CollectionSliderComponent,
    // Home Eight
    AboutUsComponent,

    ShopComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    SidebarComponent,
    CategoriesComponent,
    ModalCartComponent,
    NewProductComponent,
    ExitPopupComponent,
    AgeVerificationComponent,
    NewsletterComponent]
})
export class ShopModule { }
