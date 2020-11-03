import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { IShapeOptions } from '../../board/elements';
import Pickr from '@simonwep/pickr';
/**
 * Componente que maneja las opciones de figura del editor
 */
@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css'],
})
export class ShapeComponent implements OnChanges, AfterViewInit {
  /**
   * Emite los cambios realizados a la figura en el editor
   */
  @Output() eventShapeChanges = new EventEmitter<IShapeOptions>();
  @Output() eventClose = new EventEmitter<boolean>();
  /**
   * Almacena la información de la figura en el canvas
   */
  @Input() shape: IShapeOptions;
  /**
   * Objeto tipo picker de color para el color la figura
   */
  fillColor: Pickr;
  /**
   * Objeto tipo picker de color para el borde de color de la figura
   */
  borderColor: Pickr;
  /**
   * Decorador que obtiene la instancia del picker de color
   */
  @ViewChild('fillColor', { static: true }) inputFillColor: ElementRef;
  /**
   * Decorador que obtiene la instancia del picker de borde de color
   */
  @ViewChild('borderColor', { static: true }) inputBorderColor: ElementRef;

  // constructor() {}

  // ngOnInit(): void {}
  /**
   * Función que detecta el cambio de color de los pickers
   * y actualiza la información en la página
   */
  ngOnChanges(): void {
    if (!this.fillColor || !this.borderColor) { return null; }
    if (!this.fillColor) { return null; }
    // @ts-ignore
    this.fillColor.setColor(this.shape.fill);
    this.borderColor.setColor(this.shape.stroke);
  }
  /**
   * Función que crea los pickers de colores y agrega eventos
   * para cada cambio de color en los pickers
   */
  ngAfterViewInit(): void {
    this.fillColor = Pickr.create({
      el: this.inputFillColor.nativeElement,
      theme: 'nano', // or 'monolith', or 'nano'
      // @ts-ignore
      default: this.shape.fill || '#000000',
      swatches: [
        'rgb(244, 67, 54,1)',
        'rgba(233, 30, 99,1)',
        'rgba(156, 39, 176,1)',
        'rgba(103, 58, 183,1)',
        'rgba(156, 39, 176,1)',
        'rgba(103, 0, 183,1)',
        'rgba(156, 39, 0,1)',
        'rgba(103, 58, 0,1)',
        'rgba(255, 255, 255,0)',
      ],
      position: 'bottom-start',

      components: {
        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
          input: true,
          hex: false,
          save: false,
        },
      },
    });
    this.borderColor = Pickr.create({
      el: this.inputBorderColor.nativeElement,
      theme: 'nano', // or 'monolith', or 'nano'
      default: this.shape.stroke || '#000000',
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
      ],
      position: 'top-start',

      components: {
        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
          input: true,
          hex: false,
          save: false,
        },
      },
    });
    this.fillColor.on('change', (color: any) => {
      this.setBackgroundColor(color.toHEXA().toString());
      this.fillColor.setColor(color.toHEXA().toString());
    });
    this.borderColor.on('change', (color: any) => {
      this.setBorderColor(color.toHEXA().toString());
      this.borderColor.setColor(color.toHEXA().toString());
    });
  }
  /**
   * Función que emite el color de la figura
   * @param $event Contiene el color de la figura
   */
  setBackgroundColor = ($event: any) => {
    this.eventShapeChanges.emit({ fill: $event });
  }
  /**
   * Función que emite el color de fondo de la figura
   * @param $event Contiene el color de borde de la figura
   */
  setBorderColor = ($event: any) => {
    this.eventShapeChanges.emit({ stroke: $event });
  }
  /**
   * Función que detecta el cambio en el número de lados de la figura y emite ese valor
   * @param $event Valor del número de lados de la figura
   */
  changeSides = ($event: number) => {
    if ($event < 4) {
      this.shape.sides = 4;
      this.eventShapeChanges.emit({ sides: 4 });
    } else if ($event > 20) {
      this.shape.sides = 20;
      this.eventShapeChanges.emit({ sides: 20 });
    } else {
      this.eventShapeChanges.emit({ sides: $event });
    }
  }
  /**
   * Función que detecta el cambio en el radio de la figura y emite ese valor
   * @param $event Valor del radio de la figura
   */
  changeRadio = ($event: number) => {
    this.eventShapeChanges.emit({ radio: $event });
  }
  /**
   * Función que detecta el cambio en el ancho de borde de la figura y emite ese valor
   * @param $event Valor del ancho de borde de la figura
   */
  changeStrokeWidth = ($event: number) => {
    this.eventShapeChanges.emit({ strokeWidth: $event });
  }
  /**
   * Función que detecta el cambio de figura y emite ese valor
   * @param type Cadena con el tipo de figura escogido
   */
  changeShape = (type: string) => {
    if (this.shape.type === type) { return null; }
    this.eventShapeChanges.emit({ type });
  }
  sendClose = (): void => {
    this.eventClose.emit(true);
  };
}
