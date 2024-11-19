// Grapoi.d.ts

import { DatasetCore, Term, Quad_Predicate, Quad_Subject, Quad_Graph, Quad_Object } from '@rdfjs/types';
import Path from './Path.js';
import PathList, { PathListOptions } from './PathList.js';

export interface GrapoiOptions extends PathListOptions {
  term?: Term;
  graph?: Quad_Graph;
}

declare class Grapoi extends PathList {
  constructor(args: GrapoiOptions);

  addIn(predicates: Quad_Predicate[], subjects?: Quad_Subject[], callback?: (grapoi: Grapoi) => void): Grapoi;
  addList(predicates: Quad_Predicate[], items?: Term[]): Grapoi;
  addOut(predicates: Quad_Predicate[], objects?: Quad_Object[], callback?: (grapoi: Grapoi) => void): Grapoi;
  base(base: Term | Term[]): Grapoi;
  best(score: (grapoi: Grapoi) => any): Grapoi;
  deleteIn(predicates: Quad_Predicate[], subjects?: Quad_Subject[]): this;
  deleteList(predicates: Quad_Predicate[]): this;
  deleteOut(predicates: Quad_Predicate[], objects?: Quad_Object[]): this;
  hasIn(predicates: Quad_Predicate[], subjects?: Quad_Subject[]): Grapoi;
  hasOut(predicates: Quad_Predicate[], objects?: Quad_Object[]): Grapoi;
  in(predicates: Quad_Predicate[], subjects?: Quad_Subject[]): Grapoi;
  list(): Iterator<Grapoi>;
  node(terms?: Term[]): Grapoi;
  out(predicates: Quad_Predicate[], objects?: Quad_Object[]): Grapoi;
  rebase(base: Term | Term[]): Grapoi;
  replace(replacement: Term | Term[]): Grapoi;
  score(score: (grapoi: Grapoi) => any, options?: { limit?: number; offset?: number }): Grapoi;
}

export default Grapoi;
