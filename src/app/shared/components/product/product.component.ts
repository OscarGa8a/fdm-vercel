import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() img_view: boolean;

  constructor(private router: Router, public productsService: ProductsService,
    private wishlistService: WishlistService, private cartService: CartService) {
  }

  ngOnInit() {  }

  // Add to cart

  public addToCart(product: Product,  quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }


  // Add to wishlist
  public addToWishlist(product: Product) {
     this.wishlistService.addToWishlist(product);
  }
}
