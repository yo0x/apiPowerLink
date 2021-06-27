import { Component, OnInit } from '@angular/core';
import { DataToSend } from './dataToSend';
import { HaircutVec } from './haircut';
import { HourVec } from './hourvec';
import { PhoneNumber, PhoneNumberErrors } from './phonenumber';

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
  availableHours?: HourVec[];
  canProccedToPayment: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  updatePrice() {
    this.price = this.haircuts.find((v) => v.type === this.currentHc)?.price;
  }

  // stub, should retrive from db
  fillHours(): void {
    this.availableHours = [
      new HourVec(7, 0),
      new HourVec(10, 15),
      new HourVec(10, 45),
      new HourVec(15, 0)
    ];
  }

  // aid to display hours.. should be private static but it throws an error for some reason 
  padNumToStr(num: number | string, total: number): string {
    let s = num.toString();
    if(s.length === total) return s;
    return this.padNumToStr("0" + s, total);
  }

  addTime(t: HourVec) {
    // who the fuck came up with this stupid api?!
    // setHours returs a date primitive for some reason (i.e as dates are saved in computers)
    // and you need to use a copy-constructor for null-checking for some reason
    // otherwise it yield another date primitive.
    this.chosenDate = new Date(new Date(this.chosenDate??new Date()).setHours(t.hour,t.min));
    // no easy way too validate this otherwise
    this.canProccedToPayment = true;
  }

  // for step2
  name_first: string = "";
  name_last: string = "";
  tmp_phone: string = "";
  phone?: PhoneNumber;
  email?: string;

  canCC: boolean = false;
  canAccept: boolean = false;

  sendAcceptenceCode(): void {
    this.phone = new PhoneNumber(this.tmp_phone);
    if(this.phone.isOk()) {
      this.canAccept = true;
    }
  }
  
  sendToServer(): void {
    const json_obj = new DataToSend(
      this.name_first,
      this.name_last,
      this.phone??new PhoneNumber('123-1234567'),
      this.chosenDate??new Date(),
      this.currentHc??"",
      this.email
    ).getJSON();
    console.log(json_obj);
  }
}
