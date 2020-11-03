import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-upload-profile-photo',
  templateUrl: './upload-profile-photo.component.html',
  styleUrls: ['./upload-profile-photo.component.css']
})
export class UploadProfilePhotoComponent implements OnInit {
  @Output() data = new EventEmitter<FormData>();
  config1: DropzoneConfigInterface = {
    clickable: true,
    acceptedFiles: 'image/*',
    maxFiles: 1,
    addRemoveLinks: true,
    dictRemoveFile: 'Eliminar imagen',
    dictCancelUpload: 'Cancelar',
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  constructor() { }

  ngOnInit(): void {
  }

  onUploadSuccess(e) {
    const formData = new FormData();
    formData.append('fdm_profile', e[0].dataURL);
    this.data.emit(formData);
  }

  onUploadError(e: any) {
    console.log(e);
  }

}
