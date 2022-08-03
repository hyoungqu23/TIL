// import * as crypto from 'crypto'; -> "esModuleInterop": false인 경우
import crypto from 'crypto';
// TypeScript로 작성되지 않은 패키지를 import하는 경우, Type Declaration을 모두 `.d.ts` 파일로 생성하거나,
// https://github.com/DefinitelyTyped/DefinitelyTyped 에서
// npm i -D @types/node로 설치할 수 있다.
// 이를 통해 해당 패키지의 Type Declaration을 자동으로 생성할 수 있다.
// 다만, 최근에는 .d.ts 파일이 패키지 자체에 포함되어 있는 경우가 많다.

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    // hash 값은 prevHash, height, data의 값에 의존함
    // hash 값은 복호화시 언제나 같은 결과값을 반환함(결정론적)
    public prevHash: string,
    public height: number,
    public data: string,
  ) {
    // initialize hash value by static function
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash = (prevHash: string, height: number, data: string) => {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  };
}
