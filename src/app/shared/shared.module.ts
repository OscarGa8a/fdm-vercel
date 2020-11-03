import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
// Services
import {WINDOW_PROVIDERS} from './services/windows.service';
import {LandingFixService} from '../shared/services/landing-fix.service';
import {ProductsService} from './services/products.service';
import {WishlistService} from './services/wishlist.service';
import {CartService} from './services/cart.service';
import {OrderService} from './services/order.service';
import {PaginationService} from './classes/paginate';
// Pipes
import {OrderByPipe} from './pipes/order-by.pipe';
// profile
import {HeaderOneComponent} from './header/header-one.component';
import {TopbarOneComponent} from './header/widgets/topbar/topbar-one.component';
import {NavbarComponent} from './header/widgets/navbar/navbar.component';
import {SettingsComponent} from './header/widgets/settings/settings.component';
import {LeftMenuComponent} from './header/widgets/left-menu/left-menu.component';
import {FooterOneComponent} from './footer/footer-one/footer-one.component';
import {InformationComponent} from './footer/widgets/information/information.component';
import {CategoriesComponent} from './footer/widgets/categories/categories.component';
import {WhyWeChooseComponent} from './footer/widgets/why-we-choose/why-we-choose.component';
import {CopyrightComponent} from './footer/widgets/copyright/copyright.component';
import {SocialComponent} from './footer/widgets/social/social.component';
import {ToggleFullscreenDirective} from './directives/fullscreen.directive';
import {RightSidebarComponent} from './components/right-sidebar/right-sidebar.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import {LogoFourteenComponent} from './footer/widgets/logo/logo.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
    exports: [
        CommonModule,
        TranslateModule,
        HeaderOneComponent,
        FooterOneComponent,
        OrderByPipe,
        ToggleFullscreenDirective,
        RightSidebarComponent,
        SuscribeComponent,
        LogoFourteenComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        SlickCarouselModule
    ],
    declarations: [
        LogoFourteenComponent,
        HeaderOneComponent,
        FooterOneComponent,
        OrderByPipe,
        NavbarComponent,
        SettingsComponent,
        LeftMenuComponent,
        TopbarOneComponent,
        InformationComponent,
        CategoriesComponent,
        WhyWeChooseComponent,
        CopyrightComponent,
        SocialComponent,
        ToggleFullscreenDirective,
        RightSidebarComponent,
        SuscribeComponent
    ],
    providers: [
        WINDOW_PROVIDERS,
        LandingFixService,
        ProductsService,
        WishlistService,
        CartService,
        OrderService,
        PaginationService
    ]
})
export class SharedModule {
}
