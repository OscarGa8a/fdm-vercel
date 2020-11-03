import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRedesComponent } from './modal-redes.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ModalRedesComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ModalRedesComponent],
  entryComponents: [ModalRedesComponent]
})
export class ModalRedesModule { }
