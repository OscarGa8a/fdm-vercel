import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Observable } from 'rxjs';
import { MatchPasswordValidator } from './password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changeP: FormGroup;
  rol$: Observable<string>;

  constructor(private  fb: FormBuilder, private  authenticationService: AuthenticationService) {
    this.createFormChangePassword();
    this.rol$ = this.authenticationService.getrolUser();
  }

  ngOnInit() { }

  private createFormChangePassword() {
    this.changeP = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MatchPasswordValidator.matchPassword
    });
  }


}
