import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@shared/classes/product';
import { Router } from '@angular/router';
import { ProductsService } from '@shared/services/products.service';
import { WishlistService } from '@shared/services/wishlist.service';
import { CartService } from '@shared/services/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product: Product = {};
  @Input() slideRightNavConfig;
  public counter = 1;
  public selectedSize: any = '';
visible = false;
  constructor(private router: Router,
              public productsService: ProductsService, private wishlistService: WishlistService,
              private cartService: CartService, public location: Location) {
  }

  public slideRightConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-right-nav'
  };

  productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  ngOnInit(): void {
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }


  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity === 0) { return false; }
    this.cartService.addToCart(product, Number(quantity));
  }

  // Add to cart
  public buyNow(product: Product, quantity) {
    if (quantity > 0) {
      this.cartService.addToCart(product, Number(quantity));
    }
    this.router.navigate(['/pages/checkout']);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
    console.log('click');
    this.wishlistService.addToWishlist(product);
  }

  // Change size variant

  public changeSizeVariant(variant) {
    this.selectedSize = variant;
  }

  openContent() {
    this.visible = !this.visible;
  }
}
