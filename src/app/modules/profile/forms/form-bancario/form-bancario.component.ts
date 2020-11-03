import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bancario',
  templateUrl: './form-bancario.component.html',
  styleUrls: ['./form-bancario.component.css']
})
export class FormBancarioComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.form = this.fb.group({
      country: [''],
      pay: [''],
      bank: [''],
      userBank: [''],
      tc: [''],
      numberUser: [''],
      id: [''],
      number_id: ['']
    });
  }

  data(e: Event) {
    e.preventDefault();
    console.log(this.form.value);
  }
}
