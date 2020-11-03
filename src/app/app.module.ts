import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShopModule} from './multikart/shop/shop.module';
import {SharedModule} from './shared/shared.module';
import {ToastrModule} from 'ngx-toastr';
// import {rootRouterConfig} from './app.routes';
// import ngx-translate and the http loader
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// profile
import {AppComponent} from './app.component';
import {MainComponent} from './multikart/main/main.component';
import * as $ from 'jquery';
import {GraphQLModule} from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        // HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // ShopModule,
        SharedModule,
        HttpClientModule,
        NgbModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ToastrModule.forRoot({
            timeOut: 2000,
            progressBar: false,
            enableHtml: true,
        }),
        // DashboardModule,
        // InvoiceModule,
        // SettingModule,
        // ReportsModule,
        // SharedModule,
        // LocalizationModule,
        // ProductsModule,
        // SalesModule,
        // VendorsModule,
        // CouponsModule,
        // PagesModule,
        // MediaModule,
        // MenusModule,
        // UsersModule,
        GraphQLModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
