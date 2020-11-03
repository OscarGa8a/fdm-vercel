import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'left-sidebar',
        component: BlogLeftSidebarComponent
      },
      {
        path: 'right-sidebar',
        component: BlogRightSidebarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
