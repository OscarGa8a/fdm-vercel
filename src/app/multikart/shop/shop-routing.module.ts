import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';


// Routes
const routes: Routes = [
   {
    path: '',
    component: ShopComponent
  },
  {
    path: ':category',
    component: ShopComponent
  },
  {
    path: 'product',
    loadChildren: () => import('../../pages/product-detail-page/product-detail-page.module').then(m => m.ProductDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
