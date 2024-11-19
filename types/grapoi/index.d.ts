// index.d.ts

import Edge from './Edge.js';
import { GrapoiOptions } from './Grapoi.js';
import Grapoi from './Grapoi.js';
import Path from './Path.js';
import PathList from './PathList.js';

declare function grapoi(args: GrapoiOptions): Grapoi;

export {
  grapoi as default,
  Edge,
  Grapoi,
  Path,
  PathList
};
