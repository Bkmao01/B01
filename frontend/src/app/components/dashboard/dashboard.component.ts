import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  summary: string = '';
  source: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/dashboard').subscribe(data => {
      this.summary = data.summary;
      this.source = data.source;
    });
  }
}
