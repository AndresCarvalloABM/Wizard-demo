export interface Tree {
  content: TreeOption[];
}

export interface TreeOption {
  option: string;
  id: string;
  parent: string;
  depth: number;
  title: string;
  description: string;
  imgUrl: string;
  index?: number;
}


export interface Option {
  value: string;
  id: string;
}
