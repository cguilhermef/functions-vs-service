import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  divide,
  rest,
  sum,
} from '@function-vs-service/shared/interfaces/util-general';
@Component({
  selector: 'function-vs-service-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
  value1 = 10;
  value2 = 20;

  ngOnInit() {
    console.log(rest(this.value1, this.value2));
    console.log(sum(this.value1, this.value2));
    console.log(divide(this.value1, this.value2));
  }
}
