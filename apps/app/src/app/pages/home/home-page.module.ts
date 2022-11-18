import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { MiddleContentModule, WelcomeModule } from '@function-vs-service/shared/interfaces/ui-components';

@NgModule({
  declarations: [HomePageComponent],
  imports: [WelcomeModule, MiddleContentModule, RouterModule],
  exports: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}
