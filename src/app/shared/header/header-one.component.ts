import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { LandingFixService } from "../services/landing-fix.service";
import { DOCUMENT, Location } from "@angular/common";
import { WINDOW } from "../services/windows.service";
import { CartItem } from "../classes/cart-item";
import { CartService } from "../services/cart.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

declare var $: any;

@Component({
  selector: "app-header-one",
  templateUrl: "./header-one.component.html",
  styleUrls: ["./header-one.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderOneComponent implements OnInit {
  public shoppingCartItems: CartItem[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private fix: LandingFixService,
    private cartService: CartService,
    private router: Router,
    private location: Location
  ) {
    this.cartService
      .getItems()
      .subscribe(
        (shoppingCartItems) => (this.shoppingCartItems = shoppingCartItems)
      );

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        if (this.location.path().match("/custom.*")) {
          document.body.classList.add("custom");
        } else {
          document.body.classList.remove("custom");
        }
      });
  }

  ngOnInit() {
    $.getScript("assets/js/menu.js");
  }

  openNav() {
    this.fix.addNavFix();
  }

  closeNav() {
    this.fix.removeNavFix();
  }
}
