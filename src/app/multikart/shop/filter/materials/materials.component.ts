import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  visible = true;
  material = new FormControl('');

  /*Objeto de pruebas*/
   materials = [
      {
        id: '1m',
        value: 'algodón'
      },
     {
        id: '2m',
        value: 'licra'
      },
     {
        id: '3m',
        value: 'poliester'
      },
      ];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  open() {
    this.visible = !this.visible;
  }

  saveSelection(data) {
      console.log(data);
  }
}
