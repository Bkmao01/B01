import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/summary-chart').subscribe(data => {
      this.data = data.data;
      this.createChart();
    });
  }

  createChart() {
    const element = this.elRef.nativeElement.querySelector('.chart');
    const svg = d3.select(element).append('svg').attr('width', 500).attr('height', 300);

    svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d: any, i: number) => i * 30)
      .attr('y', (d: { value: number; }) => 300 - d.value)
      .attr('width', 25)
      .attr('height', (d: { value: any; }) => d.value)
      .attr('fill', 'blue');
  }
}
