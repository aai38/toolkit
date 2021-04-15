import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent  implements OnInit{

  constructor() { }

  public chartDatasets;
  public chartLabels: string[];
  public lineChartColors;
  public lineChartOptions;

  @Input() chartLabelInput: string ;
  @Input() dataArrayInput?: number[];

  @Input() minInput: number;
  @Input() maxInput: number;
  
  @Input() borderColorInput?: string;
  @Input() backgroundColorInput?: string;

  @Input() labelArray?: string[];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() lineChartLegend : boolean;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this.chartDatasets = [{
      data: this.dataArrayInput,
      label: this.chartLabelInput
    }];
    this.lineChartColors = [
      {
        borderColor: this.borderColorInput,
        backgroundColor: this.backgroundColorInput,
      },
    ];

    this.lineChartOptions = {
      responsive: true,
      scales : {
        yAxes: [{
            ticks: {
              max : this.maxInput,
              min : this.minInput
            }
        }]
      }
    };
    this.chartLabels = this.labelArray;
  }
  

  
}






