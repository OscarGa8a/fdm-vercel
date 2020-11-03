import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-design',
  templateUrl: './edit-design.component.html',
  styleUrls: ['./edit-design.component.scss']
})
export class EditDesignComponent implements OnInit {
  profile: FormGroup;

  constructor(private  fb: FormBuilder) {
    this.createFormProfile();
  }

  ngOnInit(): void {
  }

  private createFormProfile() {
    this.profile = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getImageData(data: FormData) {
    const formData = data;
    /*Habilitar si requiere ver el value que llega del output (debería ser una imagen transformada en base64)*/
    /*console.log('data', formData.get('fdm_profile'));*/
  }
}
