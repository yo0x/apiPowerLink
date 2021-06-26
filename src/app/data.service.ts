import { Injectable } from '@angular/core';
import { Client } from './models/client.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

let headers1 = new HttpHeaders();
headers1 = headers1.set('Content-Type', 'application/json; charset=utf-8').set('tokenId', '51d889d9-7e7f-4529-8d53-5157865a887a');

@Injectable({
  providedIn: 'root'
})


export class DataService {

   powerlink_create_url = 'https://api.powerlink.co.il/api/record/account';
  //powerlink_create_url = 'https://192.168.55.158:3636';


  constructor(private _http: HttpClient) { 
    
  }

  data1 = {
    "accountname" : "some66666",
   "telephone1" : "036339060",
   "idnumber" : "1234",
   "billingcity" : "tlv"
}
  postContact(data: any, myForm : NgForm){
    
    this._http.post(this.powerlink_create_url,this.data1,{
      headers: headers1
    });
    console.info(this.data1);
    myForm.reset();
  }
}
