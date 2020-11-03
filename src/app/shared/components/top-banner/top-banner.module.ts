import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from './top-banner.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TopBannerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopBannerComponent]
})
export class TopBannerModule { }
