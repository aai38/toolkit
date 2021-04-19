import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public chartDatasets;
  public chartLabels: string[];
  public barChartColors;
  public barChartOptions;

  @Input() chartLabelInput: string ;
  @Input() dataArrayInput?: number[];

  
  @Input() borderColorInput?: string;
  @Input() backgroundColorInput?: string;

  @Input() labelArray?: string[];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() barChartLegend : boolean;
  barChartPlugins = [];
  barChartType = 'bar';

  ngOnInit(): void {
    this.chartDatasets = [{
      data: this.dataArrayInput,
      label: this.chartLabelInput
    }];
    this.barChartColors = [
      {
        borderColor: this.borderColorInput,
        backgroundColor: this.backgroundColorInput,
      },
    ];

    this.barChartOptions = {
      responsive: true,
      
    };
    this.chartLabels = this.labelArray;
  }

}
