import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {CartService} from '../../shared/services/cart.service';
import {ProductsService} from '../../shared/services/products.service';
import {WishlistService} from '../../shared/services/wishlist.service';
import {Product} from '../../shared/classes/product';

@Component({
  selector: 'app-product-left-image',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent implements OnInit {

  // Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService, private wishlistService: WishlistService,
    private cartService: CartService) {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        console.log(id);
        this.productsService.getProduct(id).subscribe(product => this.product = product);
      });
      this.onResize();
  }

  public product:   Product = {};
  public products:   Product[] = [];
  public screenWidth;
  public slideRightNavConfig;

  tags = [{tag: 'Samurai', slug: 'samurai'}, {tag: 'Japon', slug: 'Japón'}, {tag: 'Oriental', slug: 'oriental'}];
    ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 576) {
         return this.slideRightNavConfig = {
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-right-slick',
            arrows: false,
            infinite: true,
            dots: false,
            centerMode: false,
            focusOnSelect: true
        };
     } else {
        return this.slideRightNavConfig = {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-right-slick',
            arrows: false,
            infinite: true,
            centerMode: false,
            dots: false,
            focusOnSelect: true,
            responsive: [
                  {
                      breakpoint: 576,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  }
            ]
        };
     }
  }

}
