import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  dimensions = ["32mm x 40 mm", "30mm x 35mm", "10mm x 15mm"];
  current = 0;

  constructor() {}

  ngOnInit(): void {}

  moveLeft() {
    if (this.current === 0) {
      this.current = this.dimensions.length - 1;
    } else {
      this.current -= 1;
    }
  }

  moveRight() {
    if (this.current === this.dimensions.length - 1) {
      this.current = 0;
    } else {
      this.current += 1;
    }
  }
}
