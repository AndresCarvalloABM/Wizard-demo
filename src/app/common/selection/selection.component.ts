import { Component, Input } from '@angular/core';

@Component({
  selector: 'abm-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  @Input() selection!: { option: string; title: string }[];
}
