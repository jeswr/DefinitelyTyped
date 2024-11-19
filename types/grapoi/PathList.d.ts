// PathList.d.ts

import { DatasetCore, Term, DataFactory, Quad } from '@rdfjs/types';
import Path from './Path';

export interface PathListOptions {
  dataset?: DatasetCore;
  factory?: DataFactory;
  ptrs?: Path[];
  terms?: Term[];
  graphs?: Term[];
}

declare class PathList {
  constructor(args: PathListOptions);

  factory: DataFactory;
  ptrs: Path[];

  clone(args?: PathListOptions): typeof this;

  deleteIn(predicates: Term[], subjects?: Term[]): this;

  deleteList(predicates: Term[]): this;

  deleteOut(predicates: Term[], objects?: Term[]): this;

  distinct(): PathList;

  execute(instruction: any): PathList;

  executeAll(instructions: any[]): PathList;

  filter(callback: (ptrList: PathList, index: number, all: PathList[]) => boolean): PathList;

  hasIn(predicates: Term[], subjects?: Term[]): PathList;

  hasOut(predicates: Term[], objects?: Term[]): PathList;

  in(predicates: Term[], subjects?: Term[]): PathList;

  isAny(): boolean;

  isList(): boolean;

  list(): Iterator<PathList> | undefined;

  map(callback: (ptrList: PathList, index: number, all: PathList[]) => any): any[];

  node(terms: Term[]): PathList;

  out(predicates: Term[], objects?: Term[]): PathList;

  quads(): Iterator<Quad>;

  trim(): PathList;

  [Symbol.iterator](): Iterator<PathList>;

  get dataset(): DatasetCore | null;

  get datasets(): DatasetCore[];

  get term(): Term | undefined;

  get terms(): Term[];

  get value(): string | undefined;

  get values(): string[];
}

export default PathList;
