import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ModalDisputeComponent } from './modal-dispute/modal-dispute.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    data: {
      title: 'Mis pedidos'
    }
  },
  {
    path: ':id',
    component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [OrdersComponent, OrderDetailComponent, ModalDisputeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatCardModule
  ],
  entryComponents: [ModalDisputeComponent]
})
export class OrdersModule { }
