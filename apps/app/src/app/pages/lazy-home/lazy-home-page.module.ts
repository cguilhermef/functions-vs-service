import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MiddleContentModule, WelcomeModule } from '@function-vs-service/shared/interfaces/ui-components';

import { LazyHomePageComponent } from './lazy-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LazyHomePageComponent
  }
];

@NgModule({
  declarations: [LazyHomePageComponent],
  imports: [CommonModule, WelcomeModule, MiddleContentModule, RouterModule.forChild(routes)],
  exports: [LazyHomePageComponent],
  providers: [],
})
export class LazyHomePageModule {}
