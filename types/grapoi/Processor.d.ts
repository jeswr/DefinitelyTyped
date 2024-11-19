// Processor.d.ts
import Edge from './Edge';
import { DatasetCore, Term, DataFactory } from '@rdfjs/types';

declare class Processor {
  static add(args: {
    ptr: { factory: DataFactory; dataset: DatasetCore; term: Term };
    start: string;
    end: string;
    subjects?: (Term | null)[];
    predicates?: (Term | null)[];
    objects?: (Term | null)[];
    graphs: Term[];
    callback?: (edge: Edge) => void;
  }): void;
}

export default Processor;
