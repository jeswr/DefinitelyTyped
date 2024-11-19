// Edge.d.ts

import { DatasetCore, Quad, QuadTermName, Quad_Graph, Quad_Subject, Quad_Object } from '@rdfjs/types';

declare class Edge {
  constructor(args: { dataset: DatasetCore; end: 'subject' | 'object'; quad: Quad; start: 'subject' | 'object' });

  dataset: DatasetCore;
  end: QuadTermName;
  quad: Quad;
  start: QuadTermName;

  get term(): Quad_Subject | Quad_Object;
  get graph(): Quad_Graph;
  get startTerm(): Quad_Subject | Quad_Object;
}

export default Edge;
