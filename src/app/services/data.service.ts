import { Injectable } from '@angular/core';

import { TreeOption } from '../interfaces/tree-options.interface';
import { treeOptions } from '../common/utils/data.utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private depth = 1;

  getInitialOptions(): TreeOption[] {
    return treeOptions.content.filter((treeOption) => treeOption.depth === this.depth);
  }

  getNextOptions(id: string, step: number): TreeOption[] {
    return treeOptions.content.filter(
      (treeOption) =>
        treeOption.parent === id && treeOption.depth === step
    );
  }

  getPreviousOptions(id: string, step: number): TreeOption[] {
    const parentSelected = treeOptions.content.find((treeOption) => treeOption.id === id)?.parent!;
    const auxParentId = treeOptions.content.find((to) => to.parent === parentSelected && to.depth === step)?.parent

    return treeOptions.content.filter((treeOption) =>treeOption.parent === auxParentId);
  }

  getStep(): number {
    return this.depth;
  }

  getOptionById(id: string): TreeOption {
    return treeOptions.content.find((treeOption) => treeOption.id === id)!;
  }
}
