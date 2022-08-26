import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeOption } from 'src/app/interfaces/tree-options.interface';

@Component({
  selector: 'abm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListComponent),
      multi: true,
    },
  ],
})
export class ListComponent implements ControlValueAccessor {
  @Input() options!: TreeOption[];
  @Input() indexSelected = -1;
  option: TreeOption | null = null;
  private onTouched!: (val: any) => {};
  private onChange!: (val: any) => {};

  onSelect(option: TreeOption, index: number) {
    this.indexSelected = index;
    option.index = index;
    this.onChange(option);
  }

  writeValue(obj: any): void {
    this.option = obj || null;
    this.indexSelected = obj?.index >= 0 ? obj?.index : -1;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
