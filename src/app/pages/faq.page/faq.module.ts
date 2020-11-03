import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqComponent} from './faq.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('../../multikart/blog/blog.module').then(m => m.BlogModule)
  },
];

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
