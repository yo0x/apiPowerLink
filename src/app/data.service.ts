import { Injectable } from '@angular/core';
import { Client } from './models/client.model';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // powerlink_create_url = 'https://api.powerlink.co.il/api/record/account';
  powerlink_create_url = 'https://192.168.55.158:3636';

  constructor(private _http: HttpClient) { }

  postContact(data: any){
    let headersToP = new HttpHeaders({
      'Content-Type': 'application/json',
      'tokenId': '51d889d9-7e7f-4529-8d53-5157865a887a'});
      let options = { headers: headersToP };
 

    this._http.post(this.powerlink_create_url,data,options);
    console.warn(data);
  }
}
