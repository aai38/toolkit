import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogButton.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}
  

  @Output()
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  
}




@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
})
export class DialogElementsExampleDialog {}
