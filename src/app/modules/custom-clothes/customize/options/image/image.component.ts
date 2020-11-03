import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent implements OnInit {
  @Output() eventClose = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  sendClose = (): void => {
    this.eventClose.emit(true);
  };
}
