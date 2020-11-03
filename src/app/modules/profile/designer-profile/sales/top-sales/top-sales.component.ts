import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { orderDB } from '@shared/tables/order-list';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss']
})
export class TopSalesComponent implements OnInit {
  order = [];
  temp = [];
  search = new FormControl('');

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor() {
    this.order = orderDB.list_top.sort((a, b) => +b.count - +a.count).filter((value, index) => index <= 9);
    this.temp = [...this.order];
  }

  updateFilter() {
    const val = this.search.value.toLowerCase().trim();

    /*Cuando el filtro cambie regresa a la primera página de datos*/
    this.table.offset = 0;
  }

  ngOnInit(): void {
  }

  /*
  * Ejemplo de como hacer la paginación con este componente:
  * link: https://stackblitz.com/edit/ngx-datatable-responsive-demo?file=app%2Fdemo-component.ts
  * */
  changePage(event) {
    console.log(event.count, 'Tamaño de la pagina:' + event.pageSize, `Pagina: ${+event.offset + 1}` );
  }
}
