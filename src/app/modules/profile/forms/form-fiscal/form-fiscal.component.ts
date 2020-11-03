import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fiscal',
  templateUrl: './form-fiscal.component.html',
  styleUrls: ['./form-fiscal.component.css']
})
export class FormFiscalComponent implements OnInit {

  form: FormGroup;
  persona = '';
  isDisabled = false;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.onChange();
  }

  private createForm() {
    this.form = this.fb.group({
      names: [''],
      lastNames: [''],
      country: [''],
      city: [''],
      address: [''],
      postal: [''],
      type_person: [''],
      regimen: [''],
      nif: ['']
    });
  }

  data(e: Event) {
    e.preventDefault();
    console.log(this.form.value);
  }
  onChange() {
    this.persona = this.form.get('type_person').value;
    if (this.persona !== '') {
      this.persona === '1' ? this.setNatural() : this.setJuridico();
    }
    console.log(this.persona);
  }

  private setNatural() {
    this.form.get('regimen').setValue('');
    this.isDisabled = false;
  }

  private setJuridico() {
    this.form.get('regimen').setValue('2');
    this.isDisabled = true;
  }
}
