import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { fabric } from 'fabric';
import FontFaceObserver from 'fontfaceobserver';
import runConfigurations from './configurations';

import { moving } from './move';
import {
  createMultiDesign,
  createTextElement,
  restoreMultiDesign,
  restoreTextElement,
  createShape,
  restoreShape,
  algoritmoPoly,
  IShapeOptions,
} from './elements';
import { CONTROL_OFFSET } from './constants';
import { rotating, rotated } from './rotate';
import { scaling } from './scale';
import { loadImageFromUrl } from './utils';


// TYPES

import {
  TCanvas,
  TFabricObject,
  TTextSelectionEvent,
  TFabricCanvas,
  TUpdateCanvas,
  TControlAndObject,
} from '../types';
/**
 * Componente app-board encagardo de renderizar los objetos en el canvas
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, AfterViewInit, OnChanges {
  /**
   * Objeto con la información del canvas de fabric
   */
  public canvas: TFabricCanvas;
  /**
   * Emite el nombre de la opción escogida en el editor
   */
  @Output() openSelection = new EventEmitter<string>();
  /**
   * Indica si se debe cerrar las opción seleccionada en el editor
   * al dar click en el visor
   */
  @Output() closeFromBoard = new EventEmitter<boolean>();

  @Output() updateSelectionMultiDesignEvent = new EventEmitter<TFabricObject>();
  /**
   * Emite la información de la figura seleccionada
   */
  @Output() updateSelectionShapeEvent = new EventEmitter<TFabricObject>();
  /**
   * Emite la información del texto seleccionado
   */
  @Output() updateSelectionTextEvent = new EventEmitter<TTextSelectionEvent>();
  /**
   * Emite el índice de la vista actual en el visor
   */
  @Output() updateProductSideEvent = new EventEmitter<number>();
  /**
   * Emite la información de la vista actual en el canvas para ser renderizada
   * en la nueva vista que se desea mostrar
   */
  @Output() updateCanvasSidesEvent = new EventEmitter<TUpdateCanvas>();
  /**
   * Indica si se debe limpiar la información del texto seleccionado
   */
  @Output() textClearedEvent = new EventEmitter<any>();
  /**
   * Emite la url de la imagen de previsualización del canvas
   */
  @Output() previewImageEvent = new EventEmitter<string>();
  /**
   * Almacena la información de la vistas del producto y sus imágenes correspondientes
   */
  @Input() product: any;
  /**
   * Almacena el ID de la variante del producto
   */
  @Input() productVariant: any;
  /**
   * Almacena el índice de la vista actual del producto en el canvas
   */
  @Input() productSide: number;
  /**
   * Arreglo que almancena los borradores de los canvas con los objetos que fueron renderizados
   */
  @Input() canvasSides: TCanvas[];
  @Input() designs: any[];
  @Input() actionToDo: string;
  /**
   * Cadena con la url del logo de CATO
   */
  urlMarca = '/assets/images/icon/logo.png';
  /**
   * Arreglo de cadenas con la url del canvas de previsualizacion
   */
  canvasSidesPreview: string[] = [];
  urlPreview = '';
  /**
   * Valor del top del elemento que contiene el canvas
   */
  top: number;
  /**
   * Valor del left del elemento que contiene el canvas
   */
  left: number;
  /**
   * Valor de la altura del canvas de fabric
   */
  height: number;
  /**
   * Valor del ancho del canvas de fabric
   */
  width: number;
  /**
   * Valor del ancho de la imagen de fondo del visor
   */
  backgroundWidth: number;
  /**
   * Valor del offset de la imagen de fondo
   */
  imgOffset: number;
  /**
   * Valor del número de columnas para el gird en el visor
   */
  gridColumn: number;
  /**
   * Valor del número de filas para el grid en el visor
   */
  gridRow: number;
  /**
   * Arreglo con el total de columnas*filas para el grid en el visor
   */
  grid: number[];
  /**
   * Indica si se esta usando el grid en el visor del editor
   */
  guideLines = false;
  /**
   * Indica si hay un objeto seleccionado en el visor del editor
   */
  objectActive = false;
  /**
   * Indica si la escala del objeto es uniforme en todos los lados
   */
  uniScaleTransform = false;
  /**
   * Indica si se debe mostrar la imagen de previsualización
   */
  showPreviewImg = false;

  openPickrOnMobile = false;
  /**
   * Arreglo con la información de cada modificación en el visor
   */
  history: TCanvas[] = [];
  /**
   * Valor del indice de la modificación actual en el canvas del visor
   */
  historyIndex = 0;
  /**
   * Indica si no se ha cambiado el tamaño del elemento canvas
   */
  state = true;
  firstLoad = true;
  /**
   * Indica si el objeto en el canvas esta rotando
   */
  isRotating = false;
  /**
   * Determina el ángulo de rotación del objeto
   */
  rotationAngle = 0;
  /**
   * Valor del ancho inicial de la ventana de windows
   */
  windowWidth = window.innerWidth;
  /**
   * Indica si se debe desactivar el color
   */
  disableShowColor = true;
  /**
   * Decorador que obtiene la instancia del contenedor del visor del editor
   */
  @ViewChild('container', { static: true }) canvasContainer: ElementRef;
  /**
   * Decorador que obtiene la instancia de la imagen de fondo del visor
   */
  @ViewChild('imgBackground', { static: true }) imgBackground: ElementRef;

  // TODO Que el botón lateral no siempre cree una figura, solo hasta confirmar	5	N
  // TODO Diferente caras en mobile, puntos con label animado (Frente, atrás, izquierda, derecha)	3	CO
  // TODO Modal confirmación	2	I
  // TODO Arrastrar y soltar, en añadir imagen (y lo de custom ink)	2	CA

  // constructor() {}

  /**
   * Función que calcula la posición del canvas en la página
   */
  ngOnInit() {
    this.top =
      (this.product[this.productSide].arriba /
        this.product[this.productSide].altoReal) *
      100;
    this.left =
      this.product[this.productSide].izquierda /
      this.product[this.productSide].anchoReal; // necesitamos el valor de 0 a 1, para multiplicar con el ancho del contenedor
  }
  /**
   * Función que detecta el cambio en el producto para calcular la posición del canvas
   * @param changes Contiene las propiedades cambiadas en el componente
   */
  ngOnChanges(changes: SimpleChanges): void {
    if ('product' in changes) {
      this.top =
        (this.product[this.productSide].arriba /
          this.product[this.productSide].altoReal) *
        100;
      this.left =
        this.product[this.productSide].izquierda /
        this.product[this.productSide].anchoReal;
    }
  }
  /**
   * Función que quita la selección del objeto seleccionado actualmente
   * @param $event Objeto con la información del evento ocurrido
   */
  deselect($event: any): void {
    if ($event.target.className === 'upper-canvas ') { return null; }
    this.objectActive = false;
    this.closeFromBoard.emit(true);
    this.disableShowColor = true;
    this.textClearedEvent.emit(true);
    this.canvas.discardActiveObject();
    const rect = this.canvas._objects.filter(({ isBorderAux }) => isBorderAux)[0];
    rect.set({
      stroke: 'transparent',
    });
    this.canvas.renderAll();
  }
  /**
   * Decorador que declara evento cuando se cambia el tamaño de la ventana del navegador
   * para cambiar el tamaño del canvas
   */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.windowWidth === window.innerWidth) {
      this.windowWidth = window.innerWidth;
      return null;
    }
    // this.changeProductSide(this.productSide);
    this.resizeCanvas();
    this.windowWidth = window.innerWidth;
  }
  /**
   * Función que crea un evento cuando se termina de cargar la imagen de fondo del
   * editor para que calcula el tamaño del canvas
   */
  ngAfterViewInit(): void {
    // Cambia el tamaño del canvas cuando se termina de cargar la imagen
    this.imgBackground.nativeElement.onload = () => {
      this.resizeCanvas();
    };
  }
  /**
   * Función que asigna las propiedades a un nuevo canvas y establece los eventos correspondientes
   */
  loadCanvas = async () => {
    const height = this.imgBackground.nativeElement.height;
    this.backgroundWidth = this.imgBackground.nativeElement.width;
    const width = this.backgroundWidth;

    const style = window.getComputedStyle(this.imgBackground.nativeElement);
    const marginLeft = parseInt(style.marginLeft, 10);
    this.imgOffset = marginLeft;
    // Obtiene el alto del canvas de fabric
    this.height =
      (this.product[this.productSide].altoAreaReal /
        this.product[this.productSide].altoReal) *
      height;
    // Obtiene el ancho del canvas de fabric
    this.width =
      (this.product[this.productSide].anchoAreaReal /
        this.product[this.productSide].anchoReal) *
      width;
    // Calcula el número de columnas para el grid
    this.gridColumn = Math.floor(this.width / 15 / 2);
    // Calcula el número de filas para el grid
    this.gridRow = Math.floor(this.height / 15 / 2);
    // Crea un arreglo del tamaño de columnas * filas y lo llena de ceros
    this.grid = Array(this.gridColumn * this.gridRow).fill(0);
    // Crea el canvas de fabric y lo configura para que mantenga la posicion de los objetos
    // renderizados al ser seleccionado alguno de esos objetos en el canvas
    this.canvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
      controlsAboveOverlay: true,
    }) as TFabricCanvas;
    // Asigna alto y ancho al canvas de fabric
    this.canvas.setHeight(this.height);
    this.canvas.setWidth(this.width);

    this.createBorder(this.canvas);

    // Se activa cuando se modifica un objeto en el canvas de fabric
    this.canvas.on('object:modified', (e: fabric.IEvent) => {
      this.changeHistory();
      // this.changeProductSide(this.productSide);
      this.generatePreviews();
    });
    // Se activa cuando se agrega un objeto al canvas de fabric
    this.canvas.on('object:added', (e: fabric.IEvent) => {
      // this.changeProductSide(this.productSide);
      this.generatePreviews();
    });
    // Se activa cuando se elimina un objeto en el canvas de fabric
    this.canvas.on('object:removed', (e: fabric.IEvent) => {
      // this.changeProductSide(this.productSide);
      this.generatePreviews();
    });
    // Se activa mientras se esta rotando un objeto en el canvas de fabric
    this.canvas.on('object:rotating', (e: fabric.IEvent) => {
      if (!this.isRotating) {
        this.isRotating = true;
      }
      const { controlled } = this.getControlAndObject();
      let initial = controlled.angle;
      const aux = Math.trunc(initial / 360);
      if (aux !== 0) {
        initial = Math.trunc(initial / aux) - 360;
      }
      if (initial >= 180 && initial <= 360) {
        this.rotationAngle = Math.trunc(360 - initial);
      } else {
        this.rotationAngle = Math.trunc(initial);
      }
      rotating(e, this.canvas);
    });
    // Se activa mientras se esta moviendo un objeto en el canvas de fabric
    this.canvas.on('object:moving', (e: fabric.IEvent): void => {
      moving(e, this.canvas, this.variableControlAction);
    });
    // Se activa cuando se termina de mover un objeto en el canvas de fabric
    this.canvas.on('object:moved', (e: fabric.IEvent): void => {
      this.calculateMaxWidthOfTextbox();
    });
    // Se activa mientras se esta escalando un objeto en el canvas de fabric
    this.canvas.on('object:scaling', (e: fabric.IEvent): void => {
      scaling(e, this.canvas);
    });
    // Se activa cuando se termina de escalar un objeto en el canvas de fabric
    this.canvas.on('object:scaled', (e: fabric.IEvent): void => {
      this.calculateMaxWidthOfTextbox();
    });
    // Se activa cuando se termina de rotar un objeto en el canvas de fabric
    this.canvas.on('object:rotated', (e: fabric.IEvent): void => {
      this.isRotating = false;
      rotated(e, this.canvas);
      this.calculateMaxWidthOfTextbox();
    });
    // Se activa cuando se selecciona un objeto en el canvas de fabric
    this.canvas.on('selection:created', (e: fabric.IEvent): void => {
      this.selectionCreatedAndUpdated(e);
    });
    // Se activa cuando teniendo selecciona un objeto en el canvas de fabric se selecciona otro objeto en el canvas
    this.canvas.on('selection:updated', (e: fabric.IEvent): void => {
      this.selectionCreatedAndUpdated(e);
      if (this.windowWidth < 960) {
        this.closeFromBoard.emit(true);
      }
    });
    // Se activa cuando se deselecciona un objeto en el canvas de fabric sin seleccionar otro objeto
    this.canvas.on('selection:cleared', (e: fabric.IEvent) => {
      this.objectActive = false;
      this.closeFromBoard.emit(true);
      this.disableShowColor = true;
      this.textClearedEvent.emit(true);
      const rect = this.canvas._objects.filter(
        ({ isBorderAux }) => isBorderAux
      )[0];
      rect.set({
        stroke: 'transparent',
      });
      this.canvas.renderAll();
    });

    runConfigurations();
  }
  /**
   * Función que reestablece todos los valores y objetos en el canvas
   */
  resizeCanvas = async () => {
    const c = document.querySelector('.canvas-container');
    const cAux = document.querySelector('.canvas-aux');
    // let json: any = dataJson;
    this.history = [];
    this.historyIndex = 0;
    this.state = false;
    if (c) {
      const canvasElement = document.createElement('canvas');
      canvasElement.setAttribute('id', 'canvas');
      cAux.appendChild(canvasElement);
      c.parentNode.removeChild(c);
      // json = this.canvas.toJSON();
      // json.altoAreaPixeles = this.height;
      // json.anchoAreaPixeles = this.width;
    }
    this.canvas = null;
    this.loadCanvas();

    this.readFromJSON(this.canvas, this.canvasSides[this.productSide]);

    this.history = [];
    this.historyIndex = 0;

    // await createMultiDesign(
    //   this.designs[0].images,
    //   {},
    //   this.canvas,
    //   this.variableControlAction,
    //   1
    // );

    // createShape(
    //   { type: 'line', radio: 60, strokeWidth: 1 },
    //   this.canvas,
    //   this.variableControlAction
    // );
    // createShape(
    //   { type: 'polygon', sides: 6, radio: 60, fill: '#222FFF' },
    //   this.canvas,
    //   this.variableControlAction
    // );
    // createShape(
    //   { type: 'circle', radio: 60, strokeWidth: 25, stroke: '#660000' },
    //   this.canvas,
    //   this.variableControlAction
    // );

    this.changeHistory();

    this.generatePreviews();
  }

  @HostListener("window:keydown", ["$event"])
  onKeyUp = ($event: KeyboardEvent): void => {
    const MOVEMENT = 1;
    if (
      !this.canvas.getActiveObject() ||
      document.activeElement !== document.body
    )
      return null;
    let { selected, controlled } = this.getControlAndObject();
    switch ($event.key) {
      case "ArrowUp":
        controlled.set({
          top: controlled.top - MOVEMENT,
        });
        selected.set({
          top: selected.top - MOVEMENT,
        });
        $event.preventDefault();

        moving(null, this.canvas, this.variableControlAction);
        this.canvas.renderAll();
        break;
      case "ArrowDown":
        controlled.set({
          top: controlled.top + MOVEMENT,
        });
        selected.set({
          top: selected.top + MOVEMENT,
        });
        $event.preventDefault();

        moving(null, this.canvas, this.variableControlAction);
        this.canvas.renderAll();
        break;
      case "ArrowLeft":
        controlled.set({
          left: controlled.left - MOVEMENT,
        });
        selected.set({
          left: selected.left - MOVEMENT,
        });
        $event.preventDefault();

        moving(null, this.canvas, this.variableControlAction);
        this.canvas.renderAll();
        break;
      case "ArrowRight":
        controlled.set({
          left: controlled.left + MOVEMENT,
        });
        selected.set({
          left: selected.left + MOVEMENT,
        });
        $event.preventDefault();
        moving(null, this.canvas, this.variableControlAction);
        this.canvas.renderAll();
        break;
      case "Delete":
        this.deleteElement();
        break;
      default:
        break;
    }
  };
  /**
   * Función que maneja el deslizamiento del táctil en móvil para cambiar
   * la vista del producto en el editor
   */
  onSwipe = (evt: any): void => {
    const x =
      Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    if (this.windowWidth < 960) {
      switch (x) {
        case 'left':
          if (this.productSide === 0) { return null; }
          this.updateProductSideEvent.emit(this.productSide - 1);
          break;
        case 'right':
          if (this.productSide === this.product.length - 1) { return null; }
          this.updateProductSideEvent.emit(this.productSide + 1);
          break;
        default:
          break;
      }
    }
  }
  /**
   * Función que crea el objeto de recorte y el objeto de bordes punteados y los agrega al canvas de fabric
   * @param canvas Objeto con la información del canvas de fabric
   */
  createBorder = (canvas: TFabricCanvas): void => {
    // Se crea el objeto del borde el cual permitirá recortar los objetos en el canvas
    const clipRectangle = new fabric.Rect({
      originX: 'left',
      originY: 'top',
      left: CONTROL_OFFSET,
      top: CONTROL_OFFSET,
      width: this.canvas.getWidth() - CONTROL_OFFSET * 2,
      height: this.canvas.getHeight() - CONTROL_OFFSET * 2,
      fill: 'transparent',
      strokeWidth: 0,
      stroke: 'black',
      selectable: false,
      hoverCursor: 'pointer',
    });
    // Damos a estos objetos `Rect` una propiedad de nombre para que las funciones` clipTo` encuentra el que quiere recortar
    clipRectangle['clipFor'] = 'layer';
    canvas.add(clipRectangle);
    // Se crea el objeto que permite mostrar los bordes punteados en el canvas
    const border = new fabric.Rect({
      originX: 'left',
      originY: 'top',
      left: CONTROL_OFFSET - 1,
      top: CONTROL_OFFSET - 1,
      width: this.canvas.getWidth() - CONTROL_OFFSET * 2 + 1,
      height: this.canvas.getHeight() - CONTROL_OFFSET * 2 + 1,
      fill: 'transparent',
      stroke: 'transparent',
      strokeDashArray: [3, 3],
      selectable: false,
      hoverCursor: 'default',
    });
    border['isBorderAux'] = true;
    canvas.add(border);
  }
  /**
   * Función que cambia la vista actual en el visor del canvas y actualiza el index de la vista
   * @param index Indice de la vista actual en el editor
   */
  changeProductSide = (index: number): void => {
    this.changeCanvasSides(this.generateJSON());
    this.updateProductSideEvent.emit(index);
  }
  /**
   * Función que actualiza la información de la vista actual y la almacena en local storage
   * @param json Canvas con la información actual del visor del editor
   */
  changeCanvasSides = (json: TCanvas): void => {
    this.updateCanvasSidesEvent.emit({
      index: this.productSide,
      canvas: json,
      widthArea: this.width,
      heightArea: this.height,
    });
    const store = {
      productVariant: this.productVariant,
      sides: this.canvasSides,
    };
    const storeString = JSON.stringify(store);
    // Almacena en local storage la información de la nueva vista del editor
    localStorage.setItem('DRAFT_FDM', storeString);
  }
  /**
   * Función que permite ocultar o mostrar la imagen de previsualización
   */
  togglePreview = (): void => {
    this.showPreviewImg = !this.showPreviewImg;
  }
  /**
   * Función que descarga una fuente y la carga al texto de fabric
   * @param font Contiene la fuente para el texto
   * @param obj Objeto tipo texto al que se cargará la fuente
   */
  loadAndUse = async (font: any, obj: any) => {
    const myfont = new FontFaceObserver(font.replace("'", ""));
    try {
      await myfont.load().then(() => {
        obj.set('fontFamily', font.replace("'", ""));
        this.canvas.renderAll();
      });
    } catch (error) {}
  }
  /**
   * Función que permite actualizar los datos de texto ingresados por el usuario
   * @param $event Contiene la información de los cambios realizados en el texto
   */
  changeCurveTextProperties = async ($event: any) => {
    const selectedAndControlled = this.getControlAndObject();
    // Obtiene el objeto controlado y su controlador
    if (!selectedAndControlled) { return null; }
    let { selected, controlled } = selectedAndControlled;
    // Si el objeto controladado es un texto curveado
    if (controlled.type === 'text-curved') {
      // controlled.pseudoCharSpacing;
      // Si el texto modificado es un texto normal
      if ($event.type === 'textbox') {
        // Curveado cambio a caja
        restoreTextElement(
          {
            ...controlled,
            charSpacing: controlled.pseudoCharSpacing * 90,
            type: 'textbox',
          },
          this.canvas,
          this.variableControlAction
        );
        // Elimina el controlado y su controlador para agregar un texto que ya no es curveado
        this.canvas.remove(controlled);
        this.canvas.remove(selected);
        // Obtiene el último objeto controlador agregado
        selected = this.canvas._objects[this.canvas._objects.length - 1];
        // Obtiene el objeto controlado
        controlled = this.canvas._objects.filter(
          (obj) => obj.id === selected.id
        )[0];
        // Activa el objeto controlado para que aparezcan los botones del controlador
        this.canvas.setActiveObject(controlled);
        return null;
      }
      if ($event.text) {
        if ($event.fontFamily) {
          await this.loadAndUse($event.fontFamily, controlled);
        }
        // Texto curveado sin cambiar a caja, cambiando texto
        const diameter = controlled.diameter * 1.0000001;
        controlled.set({
          ...$event,
          diameter,
        });
        // Obtiene los límites del objeto
        const box = controlled.getBoundingRect();
        selected.set({
          left: box.left,
          top: box.top,
          height: box.height,
          width: box.width,
        });
      } else {
        if ($event.fontFamily) {
          await this.loadAndUse($event.fontFamily, controlled);
        }
        // Texto curveado sin cambiar a caja, ni cambiar texto
        controlled.set({
          ...$event,
          charSpacing: $event.pseudoCharSpacing || controlled.charSpacing,
        });
        // Obtenga las coordenadas y medidas del objeto controlado
        const box = controlled.getBoundingRect();
        // Asigna las propiedades del objeto controlado al controlador
        // para que el controlador tome la posición y tamaño del texto
        selected.set({
          left: box.left + box.width / 2,
          top: box.top + box.height / 2,
          height: box.height,
          width: box.width,
        });
      }
    } else {
      if ($event.type === 'text-curved') {
        /// Texto cambiar a texto curveado
        const charSpacing = Math.floor(controlled.charSpacing / 90);
        restoreTextElement(
          {
            ...controlled,
            charSpacing,
            type: 'text-curved',
          },
          this.canvas,
          this.variableControlAction
        );
        this.canvas.remove(controlled);
        this.canvas.remove(selected);
        selected = this.canvas._objects[this.canvas._objects.length - 1];
        controlled = this.canvas._objects.filter(
          (obj) => obj.id === selected.id
        )[0];
        this.canvas.setActiveObject(controlled);
      } else {
        // Si el objeto controlado es un texto normal y el evento tiene un texto normal
        // Asigne al objeto controlado las propiedades del texto en el evento
        controlled.set({
          ...$event,
          charSpacing: controlled.pseudoCharSpacing * 90,
        });
        // Obtenga las coordenadas y medidas del objeto controlado
        const box = controlled.getBoundingRect();
        // Asigna las propiedades del objeto controlado al controlador
        // para que el controlador tome la posición y tamaño del texto
        selected.set({
          left: box.left + box.width / 2,
          top: box.top + box.height / 2,
          height: box.height,
          width: box.width,
          scaleX: 1,
          scaleY: 1,
        });
      }
    }
    this.canvas.renderAll();
    // this.changeProductSide(this.productSide);
  }

  createDesign = async (option) => {
    await createMultiDesign(
      this.designs[0].images,
      {},
      this.canvas,
      this.variableControlAction,
      1
    );
    this.setSelectionToCreatedElement();
    // this.changeProductSide(this.productSide);
    this.changeHistory();
  };
  /**
   * Función que crea un texto y su control y los renderiza en el canvas
   * @param options Contiene las opciones por defecto para el texto de fabric
   */
  createText = (options: any): void => {
    createTextElement(options, this.canvas, this.variableControlAction);
    this.setSelectionToCreatedElement();
    // this.changeProductSide(this.productSide);
    this.changeHistory();
  }
  /**
   * Función que crea una figura y su control y los renderiza en el canvas
   * @param options Contiene las opciones por defecto para la figura de fabric
   */
  createShape = (options: IShapeOptions): void => {
    createShape(options, this.canvas, this.variableControlAction);
    this.setSelectionToCreatedElement();
    // this.changeProductSide(this.productSide);
    this.changeHistory();
  }
  /**
   * Función que obtiene el controlador seleccionado para activar la selección
   * el objeto relacionado con el controlador
   */
  setSelectionToCreatedElement = (): void => {
    const controlled = this.canvas._objects[this.canvas._objects.length - 1];
    const selected = this.canvas._objects.filter(
      (obj) => obj.id === controlled.idRelated
    )[0];
    this.canvas.setActiveObject(selected);
  }
  /**
   * Función que detecta el evento ocurrido y emite la información al padre
   * @param e Objeto con la información del evento ocurrido
   */
  selectionCreatedAndUpdated = (e: fabric.IEvent) => {
    // Si el tipo es de selección activada, desactive la selección
    if (e.target.type === 'activeSelection') {
      this.canvas.discardActiveObject();
    } else {
      // Si no active la selección de un objeto del editor
      this.objectActive = true;
      // Obtiene el objeto de borde y activa los bordes punteados
      const rect = this.canvas._objects.filter((obj) => obj.isBorderAux)[0];
      rect.set({
        stroke: 'black',
      });
      // Si no se selecciono un control
      if (!e.target['isControl']) {
        // Obtiene el objeto controlado
        const controlled2 = this.canvas.getActiveObject() as TFabricObject;
        // Busca el control con el mismo id del objeto controlado
        const selected2 = this.canvas._objects.filter(
          (obj) => obj.id === controlled2.idRelated
        )[0];
        // Activa el control
        this.canvas.setActiveObject(selected2);
      }
      // Obtiene el control y objeto controlado
      const { selected, controlled } = this.getControlAndObject();
      selected.set({
        dirty: true,
      });

      if (controlled.type === 'text-curved' || controlled.type === 'textbox') {
        this.disableShowColor = true;
        if (window.innerWidth < 960) { return null; }
        // Emite la opción escogida en el editor
        this.openSelection.emit('text');
        const res = this.calculateMaxWidthOfTextbox();
        if (!res) {
          // Emite el texto seleccionado
          this.updateSelectionTextEvent.emit({ element: controlled });
        }
      } else if (controlled.type === 'group') {
        this.disableShowColor = false;
        if (window.innerWidth < 960) { return null; }
        this.openSelection.emit('color');
        this.updateSelectionMultiDesignEvent.emit(controlled);
      } else if (
        controlled.type === 'polygon' ||
        controlled.type === 'circle' ||
        controlled.type === 'triangle' ||
        controlled.type === 'line'
      ) {
        this.disableShowColor = true;
        if (window.innerWidth < 960) { return null; }
        this.updateSelectionShapeEvent.emit(controlled);
        this.openSelection.emit('shape');
      }
      this.canvas.requestRenderAll();
    }
  }
  /**
   * Función que calcula el ancho máximo del texto en el canvas
   * y emite el texto y el ancho
   * @returns Devuelve true si se tiene un máximo mayor a cero
   */
  calculateMaxWidthOfTextbox = (): boolean => {
    const { controlled } = this.getControlAndObject();
    // Devuelve las coordenadas del rectángulo delimitador del objeto
    // (izquierda, arriba, ancho, alto). El cuadro está alineado con el eje del lienzo
    const bounding = controlled.getBoundingRect(true, true);
    const fromLeft = bounding.left - CONTROL_OFFSET;
    const fromRight =
      this.canvas.getWidth() - bounding.left - bounding.width - CONTROL_OFFSET;
    // Obtiene distancia desde la izquierda y desde la derecha en píxeles
    const max = fromLeft < fromRight ? fromLeft : fromRight;
    // Obtiene el ancho de texto
    const width = bounding.width;
    // Calcula el ancho máximo del texto
    const maxWidth = (max * 2 + width) / controlled.scaleX;

    if (max > 0) {
      this.updateSelectionTextEvent.emit({
        element: controlled,
        maxWidth,
      });
      return true;
    } else {
      return false;
    }
  }
  /**
   * Función que emite la opción escogida en el editor y emite el controlador
   * del objeto seleccionado actualmente
   */
  variableControlAction = (): void => {
    const { controlled } = this.getControlAndObject();
    if (controlled.text) {
      this.openSelection.emit('text');
      this.updateSelectionTextEvent.emit({ element: controlled });
    }
    if (controlled.type === 'group') {
      this.openSelection.emit('color');
      this.updateSelectionMultiDesignEvent.emit(controlled);
    }
    if (
      controlled.type === 'polygon' ||
      controlled.type === 'circle' ||
      controlled.type === 'triangle' ||
      controlled.type === 'line'
    ) {
      this.openSelection.emit('shape');
      this.updateSelectionShapeEvent.emit(controlled);
    }
  }
  /**
   * Función que limpia la selección del objeto en el visor
   */
  clearSelection = (): void => {
    if (this.canvas.getActiveObject()) {
      this.canvas.discardActiveObject();
      this.canvas.renderAll();
    }
  }

  changeColor = ({ color, index }: { color: string; index: number }): void => {
    let { controlled } = this.getControlAndObject();
    controlled._objects[index].filters[0].color = color;
    controlled._objects[index].applyFilters();
    this.canvas.renderAll();

    this.history = this.history.slice(0, this.historyIndex + 1);
    this.history.push(this.generateJSON());
    this.historyIndex = this.history.length - 1;
    // this.changeProductSide(this.productSide);
  };
  /**
   * Función que obtiene una cadena con la información del canvas para la previsualización
   * @param canvas Canvas del editor con la información para la previsualización
   * @returns Devuelve la url con la previsualización del canvas
   */
  generateDesign = (canvas: TFabricCanvas): string => {
    // Filtra los objetos en el canvas con la propiedad isBorderAux
    // para obtener el objecto que sirve de borde del canvas
    const border = canvas._objects.filter(({ isBorderAux }) => isBorderAux)[0];
    // Quita el borde al canvas
    if (border) {
      border.set({
        strokeWidth: 0,
      });
    }
    // Obtiene url con información del canvas
    const urlDesign = canvas.toDataURL({
      format: 'png',
      quality: 1,
    });
    // Agrega el borde al canvas
    if (border) {
      border.set({
        strokeWidth: 1,
      });
    }
    canvas.renderAll();
    return urlDesign;
  }
  /**
   * Función que genera las previsualizaciones para mostrar en las vistas laterales
   */
  generatePreviews = (): void => {
    this.canvasSides.forEach((side, index) => {
      const canvas = new fabric.Canvas('c6') as TFabricCanvas;
      this.createBorder(canvas);
      canvas.setWidth(side.widthArea);
      canvas.setHeight(side.heightArea);
      this.readFromJSON(canvas, side);
      canvas.renderAll();
      this.generatePreview(canvas, index);
    });
  }
  /**
   * Función que genera una previsualización del canvas del editor
   * @param canvas Canvas del editor con la información para la previsualización
   * @param index Indice del canvas de previsualización
   */
  generatePreview = async (canvas: TFabricCanvas, index: number) => {
    const canvasAux = new fabric.Canvas('c4');
    const productImg = document.querySelector('.img-container img');
    canvasAux.setWidth(productImg.clientWidth);
    canvasAux.setHeight(productImg.clientHeight);
    // Obtiene la url con la información del canvas
    const urlDesign = this.generateDesign(canvas);
    const background = await loadImageFromUrl(this.product[index].url);
    // Calcula el factor de escala ancho entre el canvas y la imagen de fondo
    const scaleFactor = canvasAux.getWidth() / background.width;
    // Asigna imagen de fondo y escalas al canvas
    canvasAux.setBackgroundImage(background, () => {}, {
      scaleX: scaleFactor,
      scaleY: scaleFactor,
    });
    // Obtiene imagen del diseño en el canvas
    const design = await loadImageFromUrl(urlDesign);
    // Asigna posicion X Y al diseño
    design.set({
      top: (productImg.clientHeight * this.top) / 100,
      left: productImg.clientWidth * this.left,
    });
    // Obtiene el logo de CATO
    const waterMark = await loadImageFromUrl(this.urlMarca);
    // Aisgna posiciones y escalas al logo de CATO
    waterMark.set({
      top: canvasAux.getHeight() - waterMark.height * 0.3 - 20,
      left: canvasAux.getWidth() - waterMark.width * 0.3 - 20,
      scaleX: 0.3,
      scaleY: 0.3,
    });

    canvasAux.add(design);
    canvasAux.setOverlayImage(waterMark, null);
    canvasAux.renderAll();
    // Obtiene la url del canvas de previsualización
    const urlPreview = canvasAux.toDataURL({
      format: 'png',
      quality: 1,
    });
    this.canvasSidesPreview[index] = urlPreview;
    if (index === 0) {
      // Emite la url de previsualización para ser usada por el componente padre
      this.previewImageEvent.emit(urlPreview);
    }
  }

  zoom(scale, canvas) {
    // let scale = width / canvas.getWidth();
    let width = scale * canvas.getWidth();
    let height = scale * canvas.getHeight();

    canvas.setDimensions({
      width: width,
      height: height,
    });
    canvas.calcOffset();
    let objects = canvas.getObjects();
    for (let i in objects) {
      let scaleX = objects[i].scaleX;
      let scaleY = objects[i].scaleY;
      let left = objects[i].left;
      let top = objects[i].top;
      objects[i].scaleX = scaleX * scale;
      objects[i].scaleY = scaleY * scale;
      objects[i].left = left * scale;
      objects[i].top = top * scale;

      objects[i].setCoords();
    }
    canvas.renderAll();
  }
  /**
   * Función que sube el nivel del objeto seleccionado y su controlador
   * en la pila de objetos en el canvas
   */
  moveToUp = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      // Obtiene el nivel en la pila de objetos del controlador
      const currentIndexSelected = this.canvas.getObjects().indexOf(selected);
      // Obtiene el nivel en la pila de objetos del objeto controlado
      const currentIndexControlled = this.canvas.getObjects().indexOf(controlled);
      // Menr o igual a 4 por que esto garantiza que hay un elemento arriba de ellos
      if (currentIndexControlled <= this.canvas._objects.length - 4) {
        selected.moveTo(currentIndexSelected + 2);
        controlled.moveTo(currentIndexControlled + 2);
      }
    }
  }
  /**
   * Función que baja el nivel del objeto seleccionado y su controlador
   * en la pila de objetos en el canvas
   */
  moveToDown = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      // Obtiene el nivel en la pila de objetos del controlador
      const currentIndexSelected = this.canvas.getObjects().indexOf(selected);
      // Obtiene el nivel en la pila de objetos del objeto controlado
      const currentIndexControlled = this.canvas.getObjects().indexOf(controlled);
      // Mayor o igual a 4 por que esto garantiza que hay un elemento abajo de ellos, [0,1] de conf, [2,3] Primer elemento
      if (currentIndexControlled >= 4) {
        controlled.moveTo(currentIndexControlled - 2);
        selected.moveTo(currentIndexSelected - 2);
      }
    }
  }
  /**
   * Función que centra totalmente el objeto en el canvas
   */
  centerObject = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      selected.center();
      controlled.center();
      this.canvas.renderAll();
    }
  }
  /**
   * Función que mueve el objeto a la izquierda del canvas
   */
  alignToLeft = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        left: (selected.width * selected.scaleX) / 2 + CONTROL_OFFSET,
      });
      selected.set({
        left: (selected.width * selected.scaleX) / 2 + CONTROL_OFFSET,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que centra verticalmente el objeto en el canvas
   */
  alignToVerticalCenter = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        top: this.canvas.getHeight() / 2,
      });
      selected.set({
        top: this.canvas.getHeight() / 2,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que mueve el objeto a la derecha del canvas
   */
  alignToRight = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        left:
          this.width - (selected.width * selected.scaleX) / 2 - CONTROL_OFFSET,
      });
      selected.set({
        left:
          this.width - (selected.width * selected.scaleX) / 2 - CONTROL_OFFSET,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que mueve el objeto a la parte superior del canvas
   */
  alignToTop = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        top: (selected.height * selected.scaleX) / 2 + CONTROL_OFFSET,
      });
      selected.set({
        top: (selected.height * selected.scaleX) / 2 + CONTROL_OFFSET,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que centra horizontalmente el objeto en el canvas
   */
  alignToHorizontalCenter = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        left: this.canvas.getWidth() / 2,
      });
      selected.set({
        left: this.canvas.getWidth() / 2,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que mueve el objeto a la parte inferior del canvas
   */
  alignToBottom = (): void => {
    if (this.canvas.getActiveObject()) {
      const { selected, controlled } = this.getControlAndObject();
      controlled.set({
        top:
          this.canvas.getHeight() -
          (selected.height * selected.scaleX) / 2 -
          CONTROL_OFFSET,
      });
      selected.set({
        top:
          this.canvas.getHeight() -
          (selected.height * selected.scaleX) / 2 -
          CONTROL_OFFSET,
      });
      moving(null, this.canvas, this.variableControlAction);
      this.canvas.renderAll();
    }
  }
  /**
   * Función que deshace la última modificación realizada en el visor del editor
   */
  undo = (): void => {
    // Si no hay modificaciones anteriores retorne
    if (this.historyIndex === 0) { return; }
    // Resta uno al índice de modificaciones
    this.historyIndex = this.historyIndex - 1;
    this.resetCanvas();
    // Carga al canvas la penúltima modificación realizada
    this.readFromJSON(this.canvas, this.history[this.historyIndex]);
  }
  /**
   * Función que rehace la última modificación realizada en el visor del editor
   */
  redo = (): void => {
    // Si no hay modificaciones nuevas
    if (this.historyIndex === this.history.length - 1) {
      return;
    }
    // Aumente uno al índice de modificaciones
    this.historyIndex = this.historyIndex + 1;
    this.resetCanvas();
    // Carga al canvas la última modificación realizada
    this.readFromJSON(this.canvas, this.history[this.historyIndex]);
  }
  /**
   * Función que elimina el objeto controlado seleccionado y su controlador
   */
  deleteElement = (): void => {
    const { selected, controlled } = this.getControlAndObject();
    this.canvas.remove(selected);
    this.canvas.remove(controlled);
  }
  /**
   * Función que permite duplicar un elemento renderizado en el canvas
   */
  duplicateElement = (): void => {
    const { controlled } = this.getControlAndObject();
    if (
      controlled.type === 'circle' ||
      controlled.type === 'polygon' ||
      controlled.type === 'triangle'
    ) {
      createShape(
        {
          ...controlled,
          type: controlled.type,
        },
        this.canvas,
        this.variableControlAction
      );
    } else if (controlled.type === 'group') {
      const imgs = controlled._objects.map(
        // @ts-ignore
        ({ filters, _originalElement }: TFabricObject) => ({
          url: _originalElement.currentSrc,
          color: filters[0].color,
        })
      );
      createMultiDesign(
        imgs,
        {
          ...controlled,
        },
        this.canvas,
        this.variableControlAction,
        controlled.idDesign
      );
    } else if (controlled.text) {
      createTextElement(
        {
          ...controlled,
        },
        this.canvas,
        this.variableControlAction
      );
    }
  }
  /**
   * Función que permite cambiar el escalado uniforme en todos los lados del objeto
   */
  toggleUniformScaling = (): void => {
    this.uniScaleTransform = !this.uniScaleTransform;
    this.canvas.uniScaleTransform = this.uniScaleTransform;
    this.canvas.renderAll();
  }
  /**
   * Función que cambia el estado del grid en el visor
   */
  showGuideLines = (): void => {
    this.guideLines = !this.guideLines;
  }
  /**
   * Función que permite generar un canvas de fabric con la información actual
   * y con atributos que no contiene por defecto los objetos renderizados en ese canvas
   * @returns Devuelve un canvas de fabric con la información actual y lo nuevos atributos
   */
  generateJSON = (): TCanvas => {
    const canvas = JSON.parse(
      JSON.stringify(
        this.canvas.toJSON([
          'id',
          'idRelated',
          'isControl',
          'position',
          'sides',
          'diameter',
          'flipped',
          'initialAngle',
          'initialScale',
          'clipName',
          'pseudoCharSpacing',
          'idDesing',
          'radio',
          'clipFor',
          'isBorderAux',
        ])
      )
    );
    return canvas;
  }
  /**
   * Función que obtiene la información de data para agregarla al canvas
   * @param canvas Canvas al que se le quiere agregar la información
   * @param data Canvas con la información que se quiere agregar al otro canvas
   */
  readFromJSON = (canvas: any, data: TCanvas): void => {
    // this.resetCanvas();
    if (!data?.objects || data?.objects.length === 0) { return null; }

    /**
     * Reescribimos cordenadas y escalas para ajustar según tamaño de pantalla
     */
    // data.objects = data.objects.map(
    //   (el): FabricObject => {
    //     // console.log(
    //       "Debería dar 1 entre mismo producto",
    //       el.left,
    //       el.left * (this.width / data.widthArea)
    //     );
    //     //@ts-ignore
    //     return {
    //       ...el,
    //       left: el.left * (this.width / data.widthArea),
    //       top: el.top * (this.height / data.heightArea),
    //       scaleX: el.scaleX * (this.width / data.widthArea),
    //       scaleY: el.scaleY * (this.width / data.widthArea),
    //     };
    //   }
    // );
    // data.objects.forEach(async (obj) => {
    //   if (obj.text) {
    //     restoreTextElement(obj, canvas, this.variableControlAction);
    //   }
    //   if (obj.type === "group") {
    //     await restoreMultiDesign(obj, canvas, this.variableControlAction);
    //   }
    //   if (
    //     obj.type === "polygon" ||
    //     obj.type === "circle" ||
    //     obj.type === "triangle" ||
    //     obj.type === "line"
    //   ) {
    //     restoreShape(obj, canvas, this.variableControlAction);
    //   }
    // });
  }
  /**
   * Función que reestablece el canvas, desactivando todos los objetos seleccionados
   * y renderizando los objetos que no son controles
   */
  resetCanvas = (): void => {
    // Obtiene los objetos en el canvas que no sean controles
    const aux = this.canvas._objects.filter(
      (obj: TFabricObject) => obj.isControl === undefined
    ) as TFabricObject[];
    // Asigna los objetos que no son controles al canvas actual
    this.canvas._objects = aux;
    // Desactivca los objetos que estén seleccionados en el canvas
    this.canvas.discardActiveObject();
    this.canvas.renderAll();
  }
  /**
   * Función que almacena la información de la modificación actual en el canvas y asigna el número de la modificación
   */
  changeHistory = (): void => {
    // Almacena la información de las modificaciones anteriores
    this.history = this.history.slice(0, this.historyIndex + 1);
    // Agrega la última modificación realizada
    this.history.push(this.generateJSON());
    // Asigna el número de la modificación actual
    this.historyIndex = this.history.length - 1;
  }

  sendOpenColor = () => {
    this.openSelection.emit("color");
  };
  /**
   * Función que permite actualizar los datos de la figura ingresados por el usuario
   * @param $event Contiene la información de los cambios realizados en la figura
   */
  changeShape = ($event: any) => {
    let { selected, controlled } = this.getControlAndObject();
    const last = controlled.type;
    // Si el objeto es un poligono
    if (($event.sides || $event.radio) && controlled.type === 'polygon') {
      // Obtiene los puntos que forman el polígono
      const points = algoritmoPoly(
        $event.sides || controlled.sides,
        $event.radio || controlled.radio
      );
      $event.points = points;
      $event.radio = $event.radio || controlled.radio;
      // Configura la información ingresada al polígono
      controlled.set($event);
      controlled.setCoords();
    } else if (controlled.type === 'circle') {
      // Configura la información ingresada al círculo
      controlled.set({
        ...$event,
        radius: $event.radio || controlled.radius,
      });
    } else if (controlled.type === 'line') {
      // Configura la información ingresada a la línea
      if ($event.radio) {
        $event.points = [0, 0, $event.radio, 0];
        controlled.set($event);
      } else {
        controlled.set($event);
      }
    } else {
      // Configura la información ingresada al triángulo
      controlled.set({
        ...$event,
        width: $event.radio || controlled.width || controlled.radius,
        height:
          Math.sqrt($event.radio ** 2 - ($event.radio / 2) ** 2) ||
          controlled.height,
      });
    }

    if ($event.strokeWidth) {
      // Asigna anchura del trazo
      selected.set({
        strokeWidth: $event.strokeWidth,
      });
    }
    // Obtenga las coordenadas y medidas del objeto controlado
    const boundingRect = controlled.getBoundingRect(true, true);
    // Asigna las propiedades del objeto controlado al controlador
    // para que el controlador tome la posición y tamaño de la figura
    selected.set({
      angle: 0,
      width: boundingRect.width / selected.scaleX,
      height: boundingRect.height / selected.scaleY,
      scaleX: selected.scaleX,
      scaleY: selected.scaleY,
      left: boundingRect.left + boundingRect.width / 2,
      top: boundingRect.top + boundingRect.height / 2,
    });

    if ($event.type) {
      // Si se escogio un triangulo y el objeto anterior era una línea
      if ($event.type === 'triangle' && last === 'line') {
        const width = controlled.width;
        // Calcula altura del triángulo
        const height = Math.sqrt(
          controlled.width ** 2 - (controlled.width / 2) ** 2
        );
        controlled.width = width;
        controlled.height = height;
        // Crea una nueva figura con la información del evento
        restoreShape(
          {
            ...controlled,
            radio: controlled.radio || controlled.width,
            radius: controlled.radio || controlled.width,
            type: $event.type,
          },
          this.canvas,
          this.variableControlAction
        );
      } else {
        const r = controlled.radio || controlled.width;
        const points = algoritmoPoly(controlled.sides, r);
        // Crea una nueva figura con la información del evento
        restoreShape(
          {
            ...controlled,
            points,
            radio: controlled.radio || controlled.width,
            radius: controlled.radio || controlled.width,
            type: $event.type,
          },
          this.canvas,
          this.variableControlAction
        );
      }
      this.canvas.remove(controlled);
      this.canvas.remove(selected);
      selected = this.canvas._objects[this.canvas._objects.length - 1];
      controlled = this.canvas._objects.filter(
        (obj) => obj.id === selected.id
      )[0];
      this.canvas.setActiveObject(controlled);
      this.variableControlAction();
      this.canvas.renderAll();
    }
    // this.changeProductSide(this.productSide);
    this.canvas.renderAll();
  }
  /**
   * Función que obtiene el objeto controlado actualmente en el canvas
   * y retorna ese objeto y su controlador
   * @returns Devuelve el objeto controlado y su controlador
   */
  getControlAndObject = (): TControlAndObject => {
    // Obtiene el control selecionado
    const selected = this.canvas.getActiveObject() as TFabricObject;
    if (!selected) { return null; }
    // Obtiene el objeto controlado
    const controlled = this.canvas._objects.filter(
      (obj) => obj.id === selected.idRelated
    )[0] as TFabricObject;
    return {
      selected,
      controlled,
    };
  }
}
