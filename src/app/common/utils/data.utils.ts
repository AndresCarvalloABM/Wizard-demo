import { Tree } from 'src/app/interfaces/tree-options.interface';

export const treeOptions: Tree = {
  content: [
    { option: 'Bispecific Antibody', id: 'ba', parent: 'no-parent', depth: 1 },
    { option: 'Traditional Antibody', id: 'ta', parent: 'no-parent', depth: 1 },
    { option: 'Cell Engager Bispecific', id: 'ceb', parent: 'no-parent', depth: 1 },
    { option: 'Other', id: 'other', parent: 'no-parent', depth: 1 },
    { option: 'Soluble Ligand', parent: 'ba', id: 'ba-sl', depth: 2 },
    { option: 'Membrane Receptor', parent: 'ba', id: 'ba-mr', depth: 2 },
    { option: 'Membrane Ligand', parent: 'ba', id: 'ba-ml', depth: 2 },
    { option: 'Soluble Ligand', parent: 'ta', id: 'ta-sl', depth: 2 },
    { option: 'Membrane Ligand', parent: 'ta', id: 'ta-ml', depth: 2 },
    { option: 'Membrane Receptor', parent: 'ta', id: 'ta-mr', depth: 2 },
    { option: 'Soluble Ligand', parent: 'ceb', id: 'ceb-sl', depth: 2 },
    { option: 'Membrane Receptor', parent: 'ceb', id: 'ceb-mr', depth: 2 },
    { option: 'Membrane Ligand', parent: 'ceb', id: 'ceb-ml', depth: 2 },
    { option: 'Membrane Receptor', parent: 'ba-sl', id: 'ba-sl-mr', depth: 3 },
    { option: 'Membrane Ligand', parent: 'ba-sl', id: 'ba-sl-ml', depth: 3 },
    { option: 'Soluble Ligand', parent: 'ba-sl', id: 'ba-sl-sl', depth: 3 },
    { option: 'Membrane Receptor', parent: 'ba-ml', id: 'ba-ml-mr', depth: 3 },
    { option: 'Membrane Ligand', parent: 'ba-ml', id: 'ba-ml-ml', depth: 3 },
    { option: 'Soluble Ligand', parent: 'ba-ml', id: 'ba-ml-sl', depth: 3 },
    { option: '1', parent: 'ba-sl-sl', id: 'ba-sl-sl-1', depth: 4 },
    { option: '4', parent: 'ba-sl-sl', id: 'ba-sl-sl-4', depth: 4 },
  ],
};
