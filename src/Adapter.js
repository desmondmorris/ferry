'use strict';

import fs from 'fs';
import path from 'path';

class Adapter {
  constructor(specification, cwd) {
    this.filename = specification;
    this.load();

    this.basePath = '/api';
    this.routes = {};
  }

  load() {
    this.raw = fs.readFileSync(this.filename, 'UTF-8');
    this.specification = JSON.parse(this.raw);
  }
};

export default Adapter;