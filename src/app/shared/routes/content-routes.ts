import {Routes} from '@angular/router';
import {DesignGuard} from '@shared/guards/design.guard';

export const content: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../../modules/profile/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('../../modules/profile/buyer-profile/contact/contact.module').then(m => m.ContactModule),
    },
    {
      path: 'orders',
      loadChildren: () => import('../../modules/profile/buyer-profile/orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: 'wishlist',
        loadChildren: () => import('../../modules/profile/buyer-profile/wishlist/wishlist.module').then(m => m.WishlistModule)
    },
    {
        path: 'ventas',
        canLoad: [DesignGuard],
        loadChildren: () => import('../../modules/profile/designer-profile/sales/sales.module').then(m => m.SalesModule),
        data: {
            breadcrumb: 'Ventas'
        }
    },
    {
        path: 'settings',
        loadChildren: () => import('../../modules/profile/setting/setting.module').then(m => m.SettingModule),
        data: {
            breadcrumb: 'Configuracion'
        }
    },
    {
        path: 'datos',
        canLoad: [DesignGuard],
        loadChildren: () => import('../../modules/profile/forms/forms.module').then(m => m.FormsModule),
        data: {
            breadcrumb: 'Datos'
        }
    },
];
