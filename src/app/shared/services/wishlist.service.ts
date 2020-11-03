import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';
import {BehaviorSubject, Observable} from 'rxjs';
import {WISHLIST} from '../../const';

/*
  Servicio encargado de guaradar los productos en la lista de deseos para un usuario
 */
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  /* Arreglo que contiene los productos de la lista de deseos */
  private products = JSON.parse(localStorage.getItem(WISHLIST)) || [];
  /* Fuente de datos que guardará la referencia a la lista de productos*/
  private wishlistProducts: BehaviorSubject<Product[]> = new BehaviorSubject(this.products);
  private totalWP:  BehaviorSubject<number> = new BehaviorSubject(this.products.length);
  /*Observable que permitira a todos los componentes que tengan la instanciia del servicio suscribirse (observar) a los datos
  * de la fuente de datos*/
  observer$ = this.wishlistProducts.asObservable();
  total$ = this.totalWP.asObservable();

  // Initialize
  constructor(private toastrService: ToastrService) {
  }

  /**
   * Método encargado de retornar si un producto existe  o no en la lista de deseos.
   * @param product parametro que contiene el producto a buscar.
   * @return boolean, parametro que indica si el producto se encuentra en la lista.
   */
  public hasProduct(product: Product): boolean {
    return !!this.products.find(productFind => productFind.id === product.id);
  }

  /**
   * Método que agrega un producto a la lista de deseos.
   * @param product parametro que recibe la información del producto a ser agregado.
   */
  public addToWishlist(product: Product): Product | boolean {
    const item: Product | boolean = false;
    if (!this.hasProduct(product)) {
      this.products = [...this.products,  product];
      this.wishlistProducts.next(this.products);
      this.totalWP.next(this.products.length);
      this.toastrService.success('El producto fue agregado a la lista de deseos.');
      localStorage.setItem( WISHLIST, JSON.stringify(this.products));
    } else {
      this.toastrService.info('El producto ya se encuentra en la lista de deseos.');
    }
    return item;
  }

  /**
   * Método encargado de remover o eliminars un producto de la lista de deseos.
   * @param product parametro de tipo prodcut que recibe la información del producto que será
   * removido.
   */
  public removeFromWishlist(product: Product) {
    if (!product) { return; }
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.wishlistProducts.next(this.products);
    this.totalWP.next(this.products.length);
    localStorage.setItem( WISHLIST, JSON.stringify(this.products));
  }

}
