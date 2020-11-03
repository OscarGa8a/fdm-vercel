import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tags',
  templateUrl: './product-tags.component.html',
  styleUrls: ['./product-tags.component.scss']
})
export class ProductTagsComponent implements OnInit {
  @Input() title: string;
  @Input() tags: any;
  constructor() { }

  ngOnInit(): void {
  }

}
