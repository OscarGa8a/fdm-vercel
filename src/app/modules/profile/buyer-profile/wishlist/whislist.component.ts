import { Component, OnInit } from '@angular/core';
import { WishlistService } from '@shared/services/wishlist.service';
import { Observable } from 'rxjs';
import { Product } from '@shared/classes/product';


@Component({
  selector: 'app-whislist',
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.css']
})
export class WhislistComponent implements OnInit {

  public product$: Observable<Product[]>;
  constructor(private wishlistService: WishlistService) {
    this.product$ = this.wishlistService.observer$;
   }

  ngOnInit(): void {
  }

}
