// index.test-d.ts

import { expectType } from 'tsd';
import Edge from './Edge.js';
import Grapoi, { GrapoiOptions } from './Grapoi.js';
import Path from './Path.js';
import PathList from './PathList.js';
import grapoi from './index.js';
import { DatasetCore, Term, Quad_Predicate, Quad_Subject, Quad_Object, Quad_Graph } from '@rdfjs/types';

// Test Edge
const edge = new Edge({ dataset: {} as DatasetCore });
expectType<DatasetCore>(edge.dataset);

// Test Path
const path = new Path({ dataset: {} as DatasetCore, term: {} as Term });
expectType<DatasetCore>(path.dataset);
expectType<Term | undefined>(path.term);
expectType<number>(path.length);
expectType<Path>(path.addIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<Path>(path.addOut([{} as Quad_Predicate], [{} as Quad_Object]));
expectType<Path>(path.deleteIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<Path>(path.deleteOut([{} as Quad_Predicate], [{} as Quad_Object]));

// Test PathList
const pathList = new PathList({ dataset: {} as DatasetCore, terms: [{} as Term] });
expectType<DatasetCore>(pathList.dataset);
expectType<PathList>(pathList.addIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<PathList>(pathList.addOut([{} as Quad_Predicate], [{} as Quad_Object]));
expectType<PathList>(pathList.deleteIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<PathList>(pathList.deleteOut([{} as Quad_Predicate], [{} as Quad_Object]));

// Test Grapoi
const grapoiOptions: GrapoiOptions = { dataset: {} as DatasetCore, term: {} as Term };
const grapoiInstance = new Grapoi(grapoiOptions);
expectType<Grapoi>(grapoiInstance);
expectType<Grapoi>(grapoiInstance.addIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<Grapoi>(grapoiInstance.addOut([{} as Quad_Predicate], [{} as Quad_Object]));
expectType<Grapoi>(grapoiInstance.deleteIn([{} as Quad_Predicate], [{} as Quad_Subject]));
expectType<Grapoi>(grapoiInstance.deleteOut([{} as Quad_Predicate], [{} as Quad_Object]));

// Test grapoi function
const grapoiFuncInstance = grapoi(grapoiOptions);
expectType<Grapoi>(grapoiFuncInstance);
