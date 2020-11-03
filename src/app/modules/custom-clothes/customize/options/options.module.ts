import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options.component';
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';
import { ShapeComponent } from './shape/shape.component';
import { ColorComponent } from './color/color.component';
import { ButtonComponent } from './image/button/button.component';
import { DirectiveModule } from '@shared/directives/directive.module';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { FeatherIconsModule } from '@shared/components/feather-icons/feather-icons.module';
import { HeaderModule } from '../header/header.module';
import { InputNumberComponent } from './input-number/input-number.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    OptionsComponent,
    TextComponent,
    ImageComponent,
    ColorComponent,
    ShapeComponent,
    ButtonComponent,
    InputNumberComponent,
    SaveComponent,
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    RouterModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FeatherIconsModule,
    FormsModule,
    HeaderModule,
  ],
  exports: [OptionsComponent],
  providers: [],
})
export class OptionsModule {}
