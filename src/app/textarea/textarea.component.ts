import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() labelIcon: string = '';
  @Input() prefix: string = '';
  @Input() lines: number = 1;
}
