import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'function-vs-service-lazy-home-page',
  templateUrl: './lazy-home-page.component.html',
  styleUrls: ['./lazy-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LazyHomePageComponent implements OnInit {
  value1 = 10;
  value2 = 20;

  ngOnInit():void {
   console.log('init')
  }
}
