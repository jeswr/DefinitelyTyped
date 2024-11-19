// Path.d.ts

import { DatasetCore, Term, Quad, DataFactory, Quad_Predicate, Quad_Subject, Quad_Graph, Quad_Object } from '@rdfjs/types';
import Edge from './Edge';

declare class Path {
  constructor(args: { dataset: DatasetCore; edges?: Edge[]; factory?: DataFactory; graph?: Term; term?: Term });

  dataset: DatasetCore;
  edges: Edge[];
  factory?: DataFactory;

  get edge(): Edge | undefined;
  get graph(): Quad_Object | undefined;
  get length(): number;
  get startTerm(): Term;
  get term(): Term | undefined;
  get value(): string | undefined;

  addIn(predicates: Quad_Predicate[], subjects: Quad_Subject[], callback?: (path: Path) => void): Path;
  addList(predicates: Quad_Predicate[], items: Term[]): Path;
  addOut(predicates: Quad_Predicate[], objects: Quad_Object[], callback?: (path: Path) => void): Path;
  deleteIn(predicates: Quad_Predicate[], subjects: Quad_Subject[]): Path;
  deleteList(predicates: Quad_Predicate[]): Path;
  deleteOut(predicates: Quad_Predicate[], objects: Quad_Object[]): Path;
  execute(args: {
    operation: string;
    quantifier?: string;
    start?: string;
    end?: string;
    subjects?: Quad_Subject[];
    predicates?: Quad_Predicate[];
    objects?: Quad_Object[];
    graphs?: Quad_Graph[];
    items?: Term[];
    callback?: (path: Path) => void;
  }): Path;
  extend(edge: Edge): Path;
  hasIn(predicates: Quad_Predicate[], subjects?: Quad_Subject[]): Path[];
  hasOut(predicates: Quad_Predicate[], objects?: Quad_Object[]): Path[];
  in(predicates: Quad_Predicate[], subjects?: Quad_Subject[]): Path[];
  isAny(): boolean;
  isList(): boolean;
  list(): Iterator<Path> | undefined;
  nodes(): Iterator<{ dataset: DatasetCore; term: Term }>;
  out(predicates: Quad_Predicate[], objects?: Quad_Object[]): Path[];
  quads(): Iterator<Quad>;
  trim(): Path;
}

export default Path;
