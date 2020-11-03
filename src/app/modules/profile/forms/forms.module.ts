import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormFiscalComponent } from './form-fiscal/form-fiscal.component';
import { FormBancarioComponent } from './form-bancario/form-bancario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';


@NgModule({
  declarations: [
      FormFiscalComponent,
    FormBancarioComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class FormsModule { }
