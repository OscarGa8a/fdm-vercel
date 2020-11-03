import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumb-shop',
  templateUrl: './breadcrumb-shop.component.html',
  styleUrls: ['./breadcrumb-shop.component.css']
})
export class BreadcrumbShopComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
