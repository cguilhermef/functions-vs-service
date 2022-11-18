import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  divide,
  rest,
  sum,
} from '@function-vs-service/shared/interfaces/util-general';

@Component({
  selector: 'function-vs-service-another-lazy-home-page',
  templateUrl: './another-lazy-home-page.component.html',
  styleUrls: ['./another-lazy-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnotherLazyHomePageComponent implements OnInit {
  value1 = 10;
  value2 = 20;

  ngOnInit() {
    console.log(
      `The rest of ${this.value1} and ${this.value2} is ${rest(
        this.value1,
        this.value2
      )}`
    );
    console.log(
      `The sum of ${this.value1} and ${this.value2} is ${sum(
        this.value1,
        this.value2
      )}`
    );
    console.log(
      `The divide of ${this.value1} and ${this.value2} is ${divide(
        this.value1,
        this.value2
      )}`
    );
  }
}
