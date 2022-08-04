import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Option, TreeOption } from './interfaces/tree-options.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'abm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource!: Option[];
  step!: number;
  control = new FormControl('', Validators.required);
  workflowFinished = false;
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
    this.control.reset();
    this.popOptionSelected();
  }

  onNext(): void {
    if (this.control?.value) {
      const id = this.control.value;
      const nextOptions: TreeOption[] = this.dataService.getNextOptions(id, ++this.step);
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
  }

  get options() {
    return this.optionsSelected;
  }

  get currentStep() {
    return this.optionsSelected?.length > 0 ? this.optionsSelected[this.optionsSelected.length - 1].depth + 1 : 1;
  }

  private mapToOptions(options?: TreeOption[]): void {
    const initialOptions = this.dataService.getInitialOptions();
    this.dataSource = options?.length
      ? this.getOptions(options)
      : this.getOptions(initialOptions);
  }

  private getOptions(options: TreeOption[]) {
    return options.map((treeData) => {
      const option: Option = {
        id: treeData.id,
        value: treeData.option,
      };

      return option;
    });
  }

  private storeOptionSelected(id: string): void {
    const optionSelected = this.dataService.getOptionById(id);
    this.optionsSelected.push(optionSelected);
  }

  private popOptionSelected(): void {
    const optionSelected = this.optionsSelected[this.step - 1];
    this.control.patchValue(optionSelected.id);

    const newOptions = this.optionsSelected.slice(0, this.optionsSelected.length - 1);
    this.optionsSelected = [...newOptions];
  }
}
