import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  getRest,
  getSum,
  getDivide,
} from '@function-vs-service/shared/interfaces/util-discovery';
import { getRestAndSumAndDivide } from '@function-vs-service/shared/interfaces/util-explore';
@Component({
  selector: 'function-vs-service-lazy-home-page',
  templateUrl: './lazy-home-page.component.html',
  styleUrls: ['./lazy-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LazyHomePageComponent implements OnInit {
  value1 = 10;
  value2 = 20;

  ngOnInit() {
    console.log(getRest(this.value1, this.value2));
    console.log(getSum(this.value1, this.value2));
    console.log(getDivide(this.value1, this.value2));
    console.log(getRestAndSumAndDivide(this.value1, this.value2));
  }
}
