import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/classes/product';
import { WishlistService } from '@shared/services/wishlist.service';
import { CartService } from '@shared/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRedesComponent } from '@shared/modals/modal-redes/modal-redes.component';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  constructor(private wishlistService: WishlistService,
    private cartService: CartService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  public addToCart(product: Product,  quantity: number = 1) {
    if (quantity > 0) {
      this.cartService.addToCart(product, quantity);
    }
    this.wishlistService.removeFromWishlist(product);
  }

  // Remove from wishlist
  public removeItem(product: Product) {
    this.wishlistService.removeFromWishlist(product);
  }

  public openModal(e: Event, id: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open( ModalRedesComponent, {
      data: {url: `${environment.fakeUrl}home/shop/product/${id}`}
    });
  }

  redirect(e: Event, id) {
    e.stopPropagation();
    this.router.navigate(['/home/shop/product/' + id ]);
  }
}
