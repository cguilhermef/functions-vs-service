import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MiddleContentComponent } from './middle-content.component';

@NgModule({
  declarations: [MiddleContentComponent],
  imports: [CommonModule],
  exports: [MiddleContentComponent],
  providers: [],
})
export class MiddleContentModule {}
