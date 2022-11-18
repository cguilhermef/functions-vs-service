import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  MiddleContentModule,
  WelcomeModule,
} from '@function-vs-service/shared/interfaces/ui-components';

import { AnotherLazyHomePageComponent } from './another-lazy-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnotherLazyHomePageComponent
  }
];

@NgModule({
  declarations: [AnotherLazyHomePageComponent],
  imports: [CommonModule, WelcomeModule, MiddleContentModule, RouterModule.forChild(routes)],
  exports: [AnotherLazyHomePageComponent],
  providers: [],
})
export class AnotherLazyHomePageModule {}
