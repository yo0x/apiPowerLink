import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client.model';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';



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

    let headers1 = new HttpHeaders();
    // headers1 = headers1.set('Content-Type', 'application/json; charset=utf-8').set('tokenId', '51d889d9-7e7f-4529-8d53-5157865a887a');
    
    
  }
  
  data1 = {
    "accountname" : "some66666",
   "telephone1" : "036339060",
   "idnumber" : "1234",
   "billingcity" : "tlv"
}

  onSubmit(data: any,myForm: NgForm) {
    
    const res = this.http.post('https://api.powerlink.co.il/api/record/account',this.data1,{
      // headers: headers1
    });
    console.info(res);
    myForm.reset();
  }
  // onSubmit(data: any, myForm: NgForm) {
  //   this.dataService.postContact(data, myForm);
  // }

}
