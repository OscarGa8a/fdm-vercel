import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { orderDB } from '../../../../../shared/tables/order-list';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order = [];
  public orderFilter = [];
  search = new FormControl('');

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor() {
    this.order = orderDB.list_order;
    this.orderFilter = this.order;
  }

  /**
   * Función encargada de actualizar y filtrar el valor del array orderFilter.
   * @param event Parametro que recibe el evento que contiene el valor ingresado por el usuario y
   * el cual será utilizado para filtrar los datos.
   */
  updateFilter() {
    const val = this.search.value.toLowerCase().trim();

    /*Cuando el filtro cambie regresa a la primera página de datos*/
    this.table.offset = 0;
  }

  ngOnInit() {
  }

}
