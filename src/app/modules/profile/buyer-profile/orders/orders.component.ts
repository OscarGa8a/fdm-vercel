import { Component, OnInit } from '@angular/core';
import { OrderService } from '@shared/services/order.service';
import { Product } from '@shared/classes/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Product[]>;
  constructor(private orders: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orders$ = this.orders.getOrders();
  }

  redirect(id) {
    this.router.navigate(['/admin/orders/' + id, {data: {title: '' + id}}]);
  }

}
