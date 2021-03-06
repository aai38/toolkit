import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * Which button it should be?
   */
  @Input()
  color: 'primary' | 'accent' | 'warn';

  @Input()
  type: 'basic' | 'raised' | 'stroke' | 'flat';

  @Input()
  disabled?: boolean;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label:string = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  
}
