import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent implements OnInit {
  constructor() {}

  color = "#fff";
  colors = {
    DTG: [
      "#433752",
      "#6F169A",
      "#CA435C",
      "#B9B7F1",
      "#DE5157",
      "#7374E7",
      "#AF379E",
      "#1424F7",
      "#AEF105",
      "#75BBAF",
      "#D9599C",
      "#31FD5A",
      "#628ACB",
      "#783908",
      "#5BB547",
      "#AD7A9F",
      "#94DCD6",
      "#D23C4A",
      "#9969AF",
      "#F0AB7F",
      "#D873D2",
      "#51B0AF",
      "#335826",
      "#66D5E3",
      "#2D7566",
      "#113492",
      "#E86497",
      "#A6F206",
      "#490809",
      "#D9847C",
      "#C7EDD4",
      "#CCCFA8",
      "#DD418A",
      "#01E696",
      "#CDD5AB",
      "#35B620",
      "#7E396F",
      "#373A1C",
    ],
    sublimacion: [
      "#CCBCD1",
      "#89602D",
      "#C6DCDC",
      "#1EDECB",
      "#B82F17",
      "#21673B",
      "#7805B7",
      "#FD8C58",
      "#A4A6D4",
      "#C49DB6",
      "#1E7395",
      "#F37EF8",
      "#6F87EB",
      "#AED119",
      "#38CAB5",
      "#C72434",
      "#32080C",
      "#01E992",
    ],
  };
  types = [];
  currentType: string;

  @Output() eventMultiDesignChanges = new EventEmitter<any>();
  @Output() eventClose = new EventEmitter<boolean>();
  @Input() design: any;
  @Input() designs: any[];

  initialColors = [];
  currentLayer = 0;

  currentOptions = "color";

  ngOnInit(): void {
    this.types = Object.keys(this.colors);
    this.currentType = this.types[0];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ("design" in changes) {
      this.currentLayer = 0;
      this.initialColors = this.design._objects.map(
        (obj: any) => obj.filters[0].color
      );
    }
  }

  changeMobileOption = ($event): void => {
    if (this.currentOptions === $event) {
      this.currentOptions = "";
    } else {
      this.currentOptions = $event;
    }
  };

  changeCurrentTye = (type): void => {
    this.currentType = type;
  };

  changeLayer = (index): void => {
    this.currentLayer = index;
  };
  setColor = (color): void => {
    this.eventMultiDesignChanges.emit({ color, index: this.currentLayer });
  };

  setColorFromInput = (color): void => {
    this.colors[this.currentType].push(color);
    this.setColor(color);
  };

  resetColors = (): void => {
    let colors = this.getCurrentDesign().images;
    this.initialColors.forEach((item, index) => {
      this.eventMultiDesignChanges.emit({
        color: colors[index].color,
        index,
      });
    });
  };

  getCurrentDesign = (): any => {
    return this.designs.filter(({ id }) => id === this.design.idDesign)[0];
  };

  sendClose = (): void => {
    this.eventClose.emit(true);
  };
}
