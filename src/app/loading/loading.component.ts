import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  constructor() { }

  @Input() mode: string = "indeterminate";
  @Input() value: number = 10;
  @Input() spinner: boolean = true;
  @Input() color: string = 'primary';
  ngOnInit() {}

}
