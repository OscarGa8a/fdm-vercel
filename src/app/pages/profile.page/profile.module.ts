import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentLayoutComponent} from './content-layout.component';
import {content} from '@shared/routes/content-routes';
import {AuthGuard} from '@shared/guards/auth.guard';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BreadcrumbModule} from '@shared/components/breadcrumb/breadcrumb.module';
import {FeatherIconsModule} from '@shared/components/feather-icons/feather-icons.module';
import {DesignGuard} from '@shared/guards/design.guard';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
      ContentLayoutComponent,
      HeaderComponent,
      SidebarComponent
  ],
  imports: [
      CommonModule,
      BreadcrumbModule,
      FeatherIconsModule,
      RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
