import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';

export interface Chips {
  name: string;
  colorChip: ThemePalette;
  selected: boolean;
}


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})

export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() visible: boolean = true;
  @Input() selectable: boolean = true;
  @Input() removable: boolean = true;
  @Input() addOnBlur: boolean = true;
  @Input() label: string = 'Enter Fruit';
  @Input() placeholder: string = 'New Fruit...';
  @Input() icon: string = 'delete';
  @Input() color: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input()
  chips: Chips[] = [
    {name: 'Lemon', colorChip: undefined, selected: false},
    {name: 'Lime', colorChip: 'primary', selected: true},
    {name: 'Apple', colorChip: 'accent', selected: true},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.chips.push({name: value.trim(), colorChip:undefined, selected:false});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chip: Chips): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

}
