import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ProductColor, ColorFilter } from '../../../../shared/classes/product';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @ViewChild('content', {static: false}) content: ElementRef;
  visible = true;

  public activeItem: any = '';

  // Using Input and Output EventEmitter
  @Input()  colorsFilters:  ColorFilter[] = [];
  @Output() colorFilters:  EventEmitter<ColorFilter[]> = new EventEmitter<ColorFilter[]>();

  constructor() { }

  ngOnInit() {  }

  // Click to call function
  public changeColor(colors: ColorFilter) {
    this.activeItem = colors.color;
    if (colors.color) {
      this.colorFilters.emit([colors]);
    } else {
      this.colorFilters.emit([]);
    }
  }

  open() {
    this.visible = !this.visible;
  }
}
