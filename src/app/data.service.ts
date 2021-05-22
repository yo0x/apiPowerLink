import { Injectable } from '@angular/core';
import { Client } from './models/client.model';
import { HttpClient } from '@angular/common/http';
const https = require('https');

@Injectable({
  providedIn: 'root'
})
export class DataService {
  powerlink_create_url = 'https://api.powerlink.co.il/api/record/account';


  constructor(private _http: HttpClient) { }

  postContact(data: any){
    this._http.post(this.powerlink_create_url,data,{headers: {
      'Content-Type': 'application/json',
      'tokenId': ''
    }});
    console.warn(data);
  }
}
