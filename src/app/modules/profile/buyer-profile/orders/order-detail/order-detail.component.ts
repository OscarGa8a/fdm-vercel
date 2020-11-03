import { Component, OnInit } from '@angular/core';
import { OrderService } from '@shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModalDisputeComponent } from '../modal-dispute/modal-dispute.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail$: Observable<any>;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
     this.orderDetail$ = this.activatedRoute.params
      .pipe(
        switchMap(params => this.orderService.getOrderID(params.id))
        );
   }

  ngOnInit(): void {
  }

  openModal(state: string, product: any, order: any): void {
    if (state) {
      const dialogRef = this.dialog.open(ModalDisputeComponent, {
        data: {
          type: state,
          product: product,
          order: order
        }
      });
    } else {
      console.log('No hay estado');
    }
  }

}
