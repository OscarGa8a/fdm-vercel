import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dispute',
  templateUrl: './modal-dispute.component.html',
  styleUrls: ['./modal-dispute.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDisputeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalDisputeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
