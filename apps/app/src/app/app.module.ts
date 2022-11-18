import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, HomePageModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
