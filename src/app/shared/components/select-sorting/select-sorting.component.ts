import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-sorting',
  templateUrl: './select-sorting.component.html',
  styleUrls: ['./select-sorting.component.css']
})
export class SelectSortingComponent implements OnInit {

  selected = 'asc';
  @Output() select = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSorting() {
    this.select.emit(this.selected);
  }
}
