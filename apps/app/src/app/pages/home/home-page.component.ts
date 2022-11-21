import { getRestAndSumAndDivide } from '@function-vs-service/shared/interfaces/util-explore';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { getDivide, getRest, getSum } from '@function-vs-service/shared/interfaces/util-discovery';

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
    console.log(getRest(this.value1, this.value2));
    console.log(getSum(this.value1, this.value2));
    console.log(getDivide(this.value1, this.value2));
    console.log(getRestAndSumAndDivide(this.value1, this.value2));
  }
}
