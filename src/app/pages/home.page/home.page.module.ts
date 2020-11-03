import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from '../../modules/home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeFourteenComponent} from './home-fourteen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFourteenComponent
  },
  {
    path: 'shop',
    loadChildren: () => import('../../multikart/shop/shop.module').then(m => m.ShopModule)
  }
];

@NgModule({
  declarations: [HomeFourteenComponent],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
