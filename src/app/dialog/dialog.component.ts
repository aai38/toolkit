import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import InputComponent from '../input/input.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogButton.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogElement {
  constructor(public dialog: MatDialog) {}
  
  
  @Input()
  label: string ='Launch Dialog';
  @Input() dialogButtonLabel: string = 'Close';
  @Input() title: string = 'title';   
  @Input() content: string = 'content';
  @Input() dialogAcceptButtonLabel: string = "Okay";
  accepted: string;
  @Input() simple: boolean =true;

  openDialog() {
    const dialogRef = this.dialog.open(DialogElementDialog, {
      data: { component: InputComponent,
      modalTitle: this.title,
      modalButtonLabel: this.dialogButtonLabel,
      acceptButtonLabel: this.dialogAcceptButtonLabel,
      content: this.content,
      simple: this.simple }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.accepted = result;
    });
  }
  
  
  
}




@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
})
export class DialogElementDialog {
  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;
  componentRef: ComponentRef<any>;
  constructor(public dialogRef: MatDialogRef<DialogElementDialog>, @Inject(MAT_DIALOG_DATA) public data, private resolver: ComponentFactoryResolver,) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
  }
}
