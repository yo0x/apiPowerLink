import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { DataService } from '../data.service';



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
  onSubmit(data: any) {
    this.http.post('https://api.powerlink.co.il/api/record/account', data).subscribe((data) => {
      console.warn(data);
    });
  }

}
