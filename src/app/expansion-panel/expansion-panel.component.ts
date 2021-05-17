import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  @Input() content: string = "Content";
  @Input() title: string = "Self-aware Panel";
  @Input() description: string = "Description of the Panel";
  @Input() selfaware: boolean = false;
  @Input() panelOpenState: boolean = false;
  @Input() hideToggle: boolean = false;
  @Input() icon: string= "account_circle";
  @Input() disabled: boolean = false;
  ngOnInit() {}

}
