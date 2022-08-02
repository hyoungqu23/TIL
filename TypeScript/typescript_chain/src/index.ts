class Block {
  constructor(private data: string) {}
  static hello() {
    return 'Hello';
  }
}

import { init, exit } from 'myPackage';

init({ url: 'http://localhost:3000' });
exit(404);
