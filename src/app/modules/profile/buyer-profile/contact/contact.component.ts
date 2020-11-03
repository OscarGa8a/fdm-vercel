import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;
  config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 3,
    acceptedFiles: 'image/*,application/pdf',
    addRemoveLinks: true,
    dictRemoveFile: 'Eliminar archivo',
    dictCancelUpload: 'Cancelar',
    autoReset: null,
    errorReset: null,
    cancelReset: null,
  };

  constructor(private fb: FormBuilder) {
    this.createFormContact();
  }

  ngOnInit(): void {
  }

  onUploadSuccess(e) {
    const formData = new FormData();
    formData.append('fdm_profile', e[0].dataURL);
    console.log('llega');
  }

  onUploadError(e: any) {
    console.log('Ha ocurrido un error', e);
  }

  private createFormContact() {
    this.formContact = this.fb.group({
      names: [''],
      email: [''],
      subject: ['0'],
      files: [''],
      description: ['']
    });
  }

  getContactData() {
    console.log(this.formContact.value);
  }
}
