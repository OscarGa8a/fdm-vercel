import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { ModalRedesModule } from '@shared/modals/modal-redes/modal-redes.module';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FeatherIconsModule,
    ModalRedesModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
