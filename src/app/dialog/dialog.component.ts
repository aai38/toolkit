import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  openDialog() {
    this.dialog.open(DialogElementDialog, {
      data: { component: InputComponent,
      modalTitle: this.title,
      modalButtonLabel: this.dialogButtonLabel,
      content: this.content }
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
  constructor( @Inject(MAT_DIALOG_DATA) public data, private resolver: ComponentFactoryResolver,) {}


  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
  }
}
