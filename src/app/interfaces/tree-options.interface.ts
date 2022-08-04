export interface Tree {
  content: TreeOption[];
}

export interface TreeOption {
  option: string;
  id: string;
  parent: string;
  depth: number;
  title: string;
}


export interface Option {
  value: string;
  id: string;
}
