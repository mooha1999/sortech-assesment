import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input()
  label = '';
  @Input()
  labelIcon = '';
  @Input()
  options: string[] = [];
  @Input()
  selectedOption = '';
  @Input()
  selectedOptionIcon = '';
}
