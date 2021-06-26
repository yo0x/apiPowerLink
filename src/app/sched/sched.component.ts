import { Component, OnInit } from '@angular/core';
import { HaircutVec } from './haircut';

@Component({
  selector: 'app-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.css']
})
export class SchedComponent implements OnInit {
  price?: number;
  haircuts: HaircutVec[] = [
    new HaircutVec("תספורת גברים", "men-reg", 42),
    new HaircutVec("תספורת נשים", "women-reg", 420),
    // add some more here
  ];
  currentHc?: string;
  chosenDate?: Date;


  constructor() { }

  ngOnInit(): void {
  }

  updatePrice() {
    this.price = this.haircuts.find((v) => v.type === this.currentHc)?.price;
  }
}
