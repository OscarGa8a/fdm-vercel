import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { CartItem } from '../classes/cart-item';
import { Order } from '../classes/order';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  // Array
  public OrderDetails;

  constructor(private router: Router, private http: HttpClient) { }

  // Get order items
  getOrders(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/order-list.json').map((res: any) => res);
 }

 getOrderID(id): Observable<any> {
   return this.http.get<any>('assets/data/orders.json').map(res => res[id]);
 }
  // Create order
  public createOrder(product: any, details: any, orderId: any, amount: any) {
    const item = {
        shippingDetails: details,
        product: product,
        orderId: orderId,
        totalAmount: amount
    };
    this.OrderDetails = item;
  }

}
