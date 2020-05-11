import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token: String
  constructor() {
    this.token = localStorage.getItem("token")
  }

  ngOnInit(): void {
  }

}
