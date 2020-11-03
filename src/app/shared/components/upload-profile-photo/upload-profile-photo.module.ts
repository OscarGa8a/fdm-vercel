import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProfilePhotoComponent } from './upload-profile-photo.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post'
};



@NgModule({
  declarations: [UploadProfilePhotoComponent],
  imports: [
    CommonModule,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ], exports: [UploadProfilePhotoComponent]
})
export class UploadProfilePhotoModule { }
