import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../core/services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    authForm: FormGroup;

    owlcarousel = [
        {
            title: 'Welcome to Multikart',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
        },
        {
            title: 'Welcome to Multikart',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
        },
        {
            title: 'Welcome to Multikart',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
        }
    ];
    owlcarouselOptions = {
        loop: true,
        items: 1,
        dots: true
    };

    registerForm: FormGroup;

    constructor(private fb: FormBuilder,
                private authService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.authForm = this.createForm();
        this.registerForm = this.createRegisterForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            email: [null, [Validators.email, Validators.required]],
            password: [null, Validators.required]
        });
    }

    createRegisterForm(): FormGroup {
        return this.fb.group({
            userName: [''],
            password: [''],
            confirmPassword: [''],
        });
    }

    onSubmit(): void {
     /*   this.authService.authenticate(this.authForm.value).subscribe(value => {
            this.router.navigate(['admin']);
        });*/

     /*auth Fake*/
        const login = this.authService.authFake(this.authForm.value);
        login ? this.router.navigate(['admin/dashboard/default']) :
            alert('Error el user de pruebas para diseñador es desing@gmail.com y el pass es desing, para el usario general es ' +
                'general@gmail.com y el pass: general');
    }

}
