import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogButton.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  @Input()
  label: string ='Launch Dialog';
  
}




@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
})
export class DialogElementsExampleDialog {

  

  @Input() title: string ='Test Dialog';
  @Input() dialogButtonLabel: string = "Close";
  @Input() content: string = "Some Information";
}
