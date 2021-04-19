import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  public chartDatasets;
  public chartLabels: string[];

  @Input() dataArrayInput?: number[];
  

  @Input() labelArray?: string[];


  //@Input() chartOptionsInput: any;

  //@Input() lineChartColors: string;
  @Input() doughnutChartLegend : boolean;
  ChartPlugins = [];

  ngOnInit(): void {
    this.chartDatasets = 
       this.dataArrayInput
    ;
    

    
    this.chartLabels = this.labelArray;
  }

}
