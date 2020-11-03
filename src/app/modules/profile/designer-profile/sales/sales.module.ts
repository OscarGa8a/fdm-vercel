import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SalesRoutingModule } from './sales-routing.module';
import { OrdersComponent } from './ventas/orders.component';
import { TopSalesComponent } from './top-sales/top-sales.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent, TopSalesComponent],
    imports: [
        CommonModule,
        SalesRoutingModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ]
})
export class SalesModule { }
