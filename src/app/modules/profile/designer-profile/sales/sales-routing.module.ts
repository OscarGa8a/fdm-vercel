import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './ventas/orders.component';
import { TopSalesComponent } from './top-sales/top-sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrdersComponent,
        data: {
          title: 'Mis ventas',
          breadcrumb: 'Mis ventas'
        }
      },
        {
        path: 'top',
        component: TopSalesComponent,
        data: {
          title: 'Top ventas',
          breadcrumb: 'Top ventas'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
