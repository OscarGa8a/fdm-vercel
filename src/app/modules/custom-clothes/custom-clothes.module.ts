import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize/customize.component';
import { BoardComponent } from './customize/board/board.component';
import { SelectionComponent } from './customize/selection/selection.component';
import { FeatherIconsModule } from '@shared/components/feather-icons/feather-icons.module';
import { SummaryComponent } from './customize/summary/summary.component';
import { OptionsModule } from './customize/options/options.module';
import { DirectiveModule } from '@shared/directives/directive.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as Hammer from 'hammerjs';
import {
  HammerModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from '@angular/platform-browser';
import { HeaderModule } from './customize/header/header.module';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    CustomizeComponent,
    BoardComponent,
    SelectionComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    OptionsModule,
    FeatherIconsModule,
    DirectiveModule,
    RouterModule,
    FormsModule,
    HammerModule,
    HeaderModule,
  ],
  exports: [CustomizeComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
})
export class CustomClothesModule {}
