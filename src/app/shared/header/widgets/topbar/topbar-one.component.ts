import { Component, OnInit } from '@angular/core';
import { Product } from '../../../classes/product';
import { WishlistService } from '../../../services/wishlist.service';
import { ProductsService } from '../../../services/products.service';
import { Observable, of } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Authentication } from '@shared/classes/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {

  login: boolean;
  constructor(public productsService: ProductsService,
              private translate: TranslateService,
              private authService: AuthenticationService,
              private router: Router) {
                this.login = Authentication.isAuthenticated();
               }

  ngOnInit() { }

  public changeLanguage(lang) {
    this.translate.use(lang);
  }

  isLogin() {
    if (!this.login) {
      this.router.navigate(['/auth']);
    }
  }

  logout(e: Event) {
    e.stopPropagation();
    this.authService.fakeLogout();
    this.login = false;
  }
}
