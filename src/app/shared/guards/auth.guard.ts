import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivateChild,
    Router,
    CanLoad,
    Route,
    UrlSegment
} from '@angular/router';
import {Observable} from 'rxjs';
import {Authentication} from '../classes/authentication';
import {AuthenticationService} from '../../core/services/authentication.service';
import {ROLE_DESIGN} from '../../const';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private router: Router, private authenticationService: AuthenticationService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkLogged();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        /*Fake logic*/
        const rol = childRoute.data.rol;
        if (Authentication.getRole() !== ROLE_DESIGN) {
            return true;
        } else {
            this.router.navigate(['/admin/dashboard/default']);
            return !rol === !localStorage.getItem('role');
        }
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogged();
    }

    checkLogged() {
      /*  if (Authentication.isAuthenticated() && Authentication.getRole() !== ROLE_DESIGN) {
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }*/
        if (Authentication.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
