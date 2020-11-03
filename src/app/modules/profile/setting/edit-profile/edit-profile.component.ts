import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createFormBuyer();
  }

  ngOnInit(): void {
  }

  private createFormBuyer() {
    this.form = this.fb.group({
      name: [''],
      lastName: [''],
      typeId: [''],
      id: [''],
      birthday: [''],
      address: [''],
      country: [''],
      state: [''],
      city: [''],
      postal: ['']
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.form.get('birthday').value);
  }
}
