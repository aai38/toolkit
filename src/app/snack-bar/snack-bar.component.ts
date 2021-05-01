import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  openSnackBarWithDuration(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration
    })
  }

  @Input() actionValue: string = "Action";
  @Input() messageValue: string = "Message";
  @Input() withDuration: boolean = false;
  @Input() durationValue: number = 3000;
  ngOnInit() {}

}
