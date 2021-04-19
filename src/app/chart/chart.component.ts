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

  @Input() chartLabelInput: string;
  @Input() dataArrayInput?: number[];

  @Input() minInput: number;
  @Input() maxInput: number;

  @Input() borderColorInput?: string;
  @Input() backgroundColorInput?: string;

  @Input() labelArray?: string[];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() chartLegend: boolean;
  chartPlugins = [];

  ngOnInit(): void {
    if (this.chartType == 'line' || 'bar') {
      this.chartDatasets = [{
        data: this.dataArrayInput,
        label: this.chartLabelInput
      }];
      this.chartColors = [
        {
          borderColor: this.borderColorInput,
          backgroundColor: this.backgroundColorInput,
        },
      ];

      this.chartOptions = {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              max: this.maxInput,
              min: this.minInput
            }
          }]
        }
      };
      this.chartLabels = this.labelArray;
    }
    else if (this.chartType == 'doughnut') {
      this.chartDatasets = this.dataArrayInput;
      this.chartLabels = this.labelArray;
    }
  }

}






