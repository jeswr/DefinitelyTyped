// Factory.d.ts

import Grapoi, { GrapoiOptions } from './Grapoi.js';

declare class Factory {
  grapoi(args?: GrapoiOptions): Grapoi;
}

export default Factory;
