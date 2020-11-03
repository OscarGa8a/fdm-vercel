import {Injectable, HostListener, Inject} from '@angular/core';
import {BehaviorSubject, Observable, Subscriber} from 'rxjs';
import {WINDOW} from '../services/windows.service';

// Menu
export interface Menu {
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})

export class NavService {

    constructor(@Inject(WINDOW) private window) {
        this.onResize();
        if (this.screenWidth < 991) {
            this.collapseSidebar = true;
        }
    }

    public screenWidth: any;
    public collapseSidebar = false;

    MENUITEMS: Menu[] = [
        {
            path: '/home', title: 'Inicio', icon: 'home', type: 'link', badgeType: 'primary', active: false
        },
        {
            path: '/admin/dashboard/default', title: 'Actividad', icon: 'trending-up', type: 'link', badgeType: 'primary', active: false
        },
        {
            path: '/admin/wishlist', title: 'Mis deseos', icon: 'heart', type: 'link', badgeType: 'primary', active: false
        },
        {
            path: '/admin/orders', title: 'Mis pedidos', icon: 'gift', type: 'link', badgeType: 'primary', active: false
        },
        {
            icon: 'edit', path: '/custom', title: 'Personalizar producto', type: 'link', active: false
        },
        {
            icon: 'mail', path: '/admin/contact', title: 'Contacto', type: 'link', active: false
        },
        {
            icon: 'settings', path: '/admin/settings/', title: 'Configuración', type: 'link', active: false
        }
    ];

    MENUDESIGNER: Menu[] = [
        {
            path: '/home', title: 'Inicio', icon: 'home', type: 'link', badgeType: 'primary', active: false
        },
        {
            path: '/admin/dashboard/default', title: 'Mi actividad', icon: 'trending-up', type: 'link', badgeType: 'primary', active: true
        },
        {
            path: '/admin/diseños', title: 'Mis diseños', icon: 'image', type: 'link', badgeType: 'primary', active: false
        },
        {
            path: '/admin/categorias', title: 'Mis categorias', icon: 'bookmark', type: 'link', badgeType: 'primary', active: false
        },
        {
            title: 'Ventas', icon: 'dollar-sign', type: 'sub', badgeType: 'primary', children: [
                {
                    path: '/admin/ventas', title: 'Mis ventas', type: 'link', badgeType: 'primary', active: false
                },
                {
                    path: '/admin/ventas/top', title: 'Top ventas', type: 'link', badgeType: 'primary', active: false
                }
            ]
        },
        {
            title: 'Información financiera', icon: 'clipboard', type: 'sub', badgeType: 'primary', children: [
                {
                    path: '/admin/datos/bancarios', title: 'Información bancaria', type: 'link', badgeType: 'primary', active: false
                },
                {
                    path: '/admin/datos/fiscales', title: 'Información tributaria', type: 'link', badgeType: 'primary', active: false
                }
                ]
        },
        {
            title: 'Configuración', icon: 'settings', type: 'link', badgeType: 'primary', active: false, path: '/admin/settings',
        },
    ];

    // Array
    items: BehaviorSubject<Menu[]>;
    getSideMenu(role: string) {
       return  role === 'design' ? this.items = new BehaviorSubject<Menu[]>(this.MENUDESIGNER) :
           this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
    }
/*    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);*/

    // Windows width
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenWidth = window.innerWidth;
    }


}
