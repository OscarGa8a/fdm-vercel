import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent implements OnInit {
  sView = true;
  @Output() view = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  emitView(value: boolean) {
    this.sView = value;
    this.view.emit(this.sView);
  }

}
