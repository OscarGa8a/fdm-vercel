import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public twoCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-6');
    }
  }

  public threeCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-4');
    }
  }

  public fourCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-3');
    }
  }

  public sixCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-2');
    }
  }

}
