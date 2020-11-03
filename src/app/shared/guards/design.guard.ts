import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import {Authentication} from '@shared/classes/authentication';
import {ROLE_DESIGN} from '../../const';

@Injectable({
  providedIn: 'root'
})
export class DesignGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoginDesing();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return  this.checkLoginDesing();
  }

  checkLoginDesing() {
    if (Authentication.isAuthenticated() && Authentication.getRole() === ROLE_DESIGN) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
