import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  constructor() { }

  public chartDatasets;
  public chartLabels: string[];
  public chartColors;
  public chartOptions;

  @Input() chartType: 'bar' | 'line' | 'doughnut' | 'radar' | 'pie' | 'bubble' | 'polarArea' |'scatter';

  @Input() legend: string = "heart rate";
  @Input() data: number[] = [10, 20, 10, 15, 10];

  @Input() minimalValue_y: number ;
  @Input() maximalValue_y: number ;
  @Input() minimalValue_x: number ;
  @Input() maximalValue_x: number ;

  @Input() borderColor: string = "sienna";
  @Input() backgroundColor: string = "black";

  @Input() labels: string[] = ['One', 'Two', 'Three', 'For', 'Five'];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() chartLegend: boolean = true;
  chartPlugins = [];

  

  ngOnInit(): void {
    if (this.chartType == 'line' || 'bar' || 'radar' || 'bubble' || 'polarArea' || 'scatter') {
      this.chartDatasets = [{
        data: this.data,
        label: this.legend
      }];
      this.chartColors = [
        {
          borderColor: this.borderColor,
          backgroundColor: this.backgroundColor,
        },
      ];

      this.chartOptions = {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              max: this.maximalValue_y,
              min: this.minimalValue_y
            }
          }],
          xAxes: [{
            ticks: {
              max: this.maximalValue_x,
              min: this.minimalValue_x
            }
          }]
        }
      };
      this.chartLabels = this.labels;
    }
    else if (this.chartType == 'doughnut' || 'pie' || 'polarArea') {
      this.chartDatasets = [{
        data: this.data
      }] ;
      this.chartLabels = this.labels;
    }
  }

}






