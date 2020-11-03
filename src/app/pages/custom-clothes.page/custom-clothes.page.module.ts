import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomClothesPageComponent} from './custom-clothes.page.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomClothesModule} from '../../modules/custom-clothes/custom-clothes.module';


const routes: Routes = [
  {
    path: '',
    component: CustomClothesPageComponent
  },
  {
    path: ':id',
    component: CustomClothesPageComponent
  }
];

@NgModule({
  declarations: [CustomClothesPageComponent],
  imports: [
    CommonModule,
      CustomClothesModule,
      RouterModule.forChild(routes)
  ]
})
export class CustomClothesPageModule { }
