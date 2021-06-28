import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { DataService } from '../data.service';
import {FormsModule, NgForm} from '@angular/forms'




@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  client$: Client = new Client();
  currentClient$: Client[] = [];

  constructor(private dataService: DataService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  // onSubmit(data: any) {
  //   this.http.post('https://api.powerlink.co.il/api/record/account', data, {
  //     HttpHeaders: {
  //       'Content-Type': 'application/json',
  //       'tokenId': '51d889d9-7e7f-4529-8d53-5157865a887a'
  //     }
  //   }).subscribe((data) => {
  //     console.warn(data);
  //   });
  // }
  onSubmit(data: any, myForm : NgForm) {
    this.dataService.postContact(data);
    myForm.reset();
  }

}
