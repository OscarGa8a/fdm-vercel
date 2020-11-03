import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartItem } from '../../../../shared/classes/cart-item';
import { CartService } from '../../../../shared/services/cart.service';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import {WishlistService} from '../../../services/wishlist.service';
import { Router } from '@angular/router';
import { Authentication } from '@shared/classes/authentication';
declare var $: any;

@Component({
  selector: 'app-header-widgets',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() shoppingCartItems:   CartItem[] = [];

  public show = false;
  total$: Observable<number>;

  constructor(private translate: TranslateService,
              private cartService: CartService,
              public productsService: ProductsService,
              private wishlistService: WishlistService,
              private router: Router) {

    this.total$ = this.wishlistService.total$;

  }

  ngOnInit() { }

  openWishlist(): void {
    Authentication.isAuthenticated() ? this.router.navigate(['/admin/wishlist']) : this.router.navigate(['/pages/wishlist']);
  }

  public updateCurrency(curr) {
    this.productsService.currency = curr;
  }

  public changeLanguage(lang) {
    this.translate.use(lang);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

}
