import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '@shared/shared.module';
import { FeatherIconsModule } from '@shared/components/feather-icons/feather-icons.module';
import { EditDesignComponent } from './edit-design/edit-design.component';
import 'hammerjs';
import 'mousetrap';
import { UploadProfilePhotoModule } from '@shared/components/upload-profile-photo/upload-profile-photo.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';

export const DateFormats = {
    parse: {
        dateInput: ['DD-MM-YYYY']
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
  declarations: [ProfileComponent, EditDesignComponent, EditProfileComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SettingRoutingModule,
        SharedModule,
        FeatherIconsModule,
        UploadProfilePhotoModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MomentDateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: DateFormats }
    ],
})
export class SettingModule { }
