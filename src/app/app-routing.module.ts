import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './multikart/main/main.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home.page/home.page.module').then(m => m.HomePageModule)
            },
            {
                path: 'pages',
                loadChildren: () => import('./multikart/pages/pages-multikart.module').then(m => m.PagesMultikartModule)
            },
            {
                path: 'custom',
                loadChildren: () => import('./pages/custom-clothes.page/custom-clothes.page.module').then(m => m.CustomClothesPageModule)
            },
            {
                path: 'helpcenter',
                loadChildren: () => import('./pages/faq.page/faq.module').then(m => m.FaqModule )
            }
        ],
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/profile.page/profile.module').then(m => m.ProfileModule)
    },
    {
        path: '**',
        redirectTo: 'pages/404'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
            // initialNavigation: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
