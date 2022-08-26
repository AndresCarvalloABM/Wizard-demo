import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { TreeOption } from './interfaces/tree-options.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'abm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  step = 1;
  control = new FormControl('', Validators.required);
  workflowFinished = false;
  theOptions: TreeOption[] = [];
  indexSelected = -1;
  private optionsSelected: TreeOption[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.step = this.dataService.getStep();
    this.mapToOptions();
  }

  onBack(): void {
    const lastPosition = this.optionsSelected.length - 1;
    const id = this.optionsSelected[lastPosition].id;
    const step = this.step - 1;
    const previousOptions: TreeOption[] = this.dataService.getPreviousOptions(id, step);

    this.step -= 1;
    this.mapToOptions(previousOptions);
    this.indexSelected = this.optionsSelected[this.optionsSelected.length - 1].index || -1;
    this.control.reset();
    this.popOptionSelected();
  }

  onNext(): void {
    if (this.control?.value) {
      const optionSelected = this.control.value as any as TreeOption;
      const id = optionSelected.id;
      const nextOptions: TreeOption[] = this.dataService.getNextOptions(id, ++this.step);
      this.indexSelected = -1;
      this.storeOptionSelected(id);

      if (nextOptions?.length > 0) {
        this.mapToOptions(nextOptions);
        this.control.reset();
      } else this.workflowFinished = true;
    }
  }

  onReset(): void {
    this.step = this.dataService.getStep();
    this.mapToOptions();
    this.workflowFinished = false;
    this.optionsSelected = [];
    this.indexSelected = -1;
    this.control.reset();
  }

  getSelection(): { title: string; option: string }[] {
    return this.optionsSelected?.map((opt) => ({
      title: opt.title,
      option: opt.option
    }));
  }

  get options() {
    return this.optionsSelected;
  }

  get length() {
    return this.optionsSelected.length;
  }

  get currentStep() {
    return this.optionsSelected?.length > 0 ? this.optionsSelected[this.optionsSelected.length - 1].depth + 1 : 1;
  }

  get title() {
    return this.dataService.getTitle(this.step);
  }

  private mapToOptions(options?: TreeOption[]): void {
    const initialOptions = this.dataService.getInitialOptions();
    this.theOptions = options?.length
      ? options
      : initialOptions;
  }

  private storeOptionSelected(id: string): void {
    const optionSelected = this.dataService.getOptionById(id);
    this.optionsSelected.push(optionSelected);
  }

  private popOptionSelected(): void {
    const optionSelected = this.optionsSelected[this.step - 1];
    this.control.patchValue(optionSelected as any);

    const newOptions = this.optionsSelected.slice(0, this.optionsSelected.length - 1);
    this.optionsSelected = [...newOptions];
  }
}
