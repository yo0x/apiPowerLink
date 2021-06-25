import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navToSched(): void {
    console.log("Schedual");
  }

  navToAlter(): void {
    console.log("Alter");
  }

  navToSignup(): void {
    console.log("Signup");
  }

  navToLogin(): void {
    console.log("Login");
  }

}
