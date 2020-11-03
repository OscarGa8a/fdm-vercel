import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhislistComponent } from './whislist.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsModule } from '@shared/components/feather-icons/feather-icons.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';


const routes: Routes = [
  {
    path: '',
    component: WhislistComponent,
    data: {
      title: 'Mis deseos',
      breadcrumb: 'deseos'
    }
  }
];

@NgModule({
  declarations: [WhislistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule,
    FeatherIconsModule
  ]
})
export class WishlistModule { }
