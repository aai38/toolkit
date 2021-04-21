import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  constructor() { }

  public chartDatasets;
  public chartLabels: string[];
  public chartColors;
  public chartOptions;

  @Input() chartType: 'bar' | 'line' | 'doughnut';

  @Input() legend: string = "heart rate";
  @Input() data: number[] = [10, 20, 10, 15, 10];

  @Input() minimalValue: number ;
  @Input() maximalValue: number ;

  @Input() borderColor: string = "red";
  @Input() backgroundColor: string = "black";

  @Input() labels: string[] = ['One', 'Two', 'Three', 'For', 'Five'];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() chartLegend: boolean = true;
  chartPlugins = [];

  

  ngOnInit(): void {
    if (this.chartType == 'line' || 'bar') {
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
              max: this.maximalValue,
              min: this.minimalValue
            }
          }]
        }
      };
      this.chartLabels = this.labels;
    }
    else if (this.chartType == 'doughnut') {
      this.chartDatasets = [{
        data: this.data
      }] ;
      this.chartLabels = this.labels;
    }
  }

}





