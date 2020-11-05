import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  //Set Hieght
  @Input() chartHieght: number = 0 

  // Array of different segments in chart
  @Input() chartData: ChartDataSets[] = null;
  // = [
  @Input() chartData1: ChartDataSets[] = null ;
  //   { data: [100, 48, 40, 19, 86, 27, 90], label: 'CPU' },
  // ];

  //Labels shown on the x-axis
  
  @Input() chartLabels: Label[] = null;
  // = new Array(24).join().split(',')

  // Define chart options
  @Input() chartOptions: ChartOptions = null
  // = {
  //   responsive: true
  // };

  // Define colors of chart segments
  @Input() chartColors: Color[] = null;
  // = [

  //   { // dark grey
  //     backgroundColor: 'rgba(105, 240, 174,0.2)',
  //     borderColor: 'rgba(105, 240, 174,1)',
  //   },
  // ];

  // Set true to show legends
  @Input() chartLegend: boolean = false; 
  // = true;

  // Define type of chart
  @Input() chartType: string = 'pie';

  @Input() chartPlugins = null;

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }


}
