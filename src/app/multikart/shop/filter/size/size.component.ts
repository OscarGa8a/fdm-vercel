import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductSize} from '../../../../shared/classes/product';
declare var $: any;

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  @Input()  tagsFilters: ProductSize[] = [];
  @Output() tagFilters: EventEmitter<ProductSize[]> = new EventEmitter<ProductSize[]>();

  // Array
  public checkedTagsArray: any[] = [];
  visible = true;

  constructor() { }

  ngOnInit() {
    this.tagFilters.emit(this.checkedTagsArray);   // Pass value Using emit
  }

  // value checked call this function
  checkedFilter(event) {
    const index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked) {
      this.checkedTagsArray.push(event.target.value);
    } else {
      this.checkedTagsArray.splice(index, 1);
    }  // removed in array unchecked value
  }

  open() {
    this.visible = !this.visible;
  }

}
