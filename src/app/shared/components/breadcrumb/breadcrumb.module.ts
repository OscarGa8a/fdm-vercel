import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb.component';
import {FeatherIconsModule} from '../feather-icons/feather-icons.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [BreadcrumbComponent],
    imports: [
        CommonModule,
        FeatherIconsModule,
        RouterModule
    ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
