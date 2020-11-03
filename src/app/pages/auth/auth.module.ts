import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';
import {FeatherIconsModule} from '../../shared/components/feather-icons/feather-icons.module';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    }
];

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CarouselModule,
        ReactiveFormsModule,
        NgbTabsetModule,
        SharedModule,
        FeatherIconsModule

    ]
})
export class AuthModule {
}
