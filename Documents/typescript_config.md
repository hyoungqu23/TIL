# TypeScript의 설정 파일은 도대체 어떤 의미일까?

- 목차
- 참고 자료
  - [**TSConfig Reference**](https://www.typescriptlang.org/tsconfig)
  - [**Next.js + TypeScript + Styled Components 초기 세팅**](https://www.notion.so/1-Next-js-TypeScript-Styled-Components-1f9a68399a34432193cfe739e5196d2b)

## 시작

보일러플레이트를 만들고, 이를 기반으로 포트폴리오 프로젝트를 진행하던 중 빌드 에러가 발생해 보일러플레이트를 수정했다. 이때 도대체 `tsconfig.json`은 각각 어떤 의미를 가지는지도 모르고 사용하고 있었기에, 한 번 찾아봤다.

## 전체적인 구조

```json
//  tsconfig.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

```json
"paths": {
  "*": ["./src/*"]
},
"sourceMap": true,
```

`tsconfig.json`의 구조는 이러하다. 공식 문서에 따르면, Root Fields가 있고, Compiler Options, Watch Options 등이 존재한다. 먼저 Root Fields부터 알아보자.

### Root Fields

해당 옵션들은 TypeScript 프로젝트의 설정 방법과 관련된 옵션으로, `include`, `exclude`, `files`, `extends`, `references`을 포함하고 있다.

- `files`
  프로젝트에 포함할 파일의 허용 목록을 지정하는 옵션으로, 파일을 찾을 수 없으면 에러가 발생한다. 다만, 파일의 수가 적은 경우에만 사용하고, 대부분 `include` 옵션을 활용하는 것 같다.
- `extends`
  상속할 다른 config 파일의 경로를 값으로 가지는 옵션으로, config 상속에 관련된 옵션인데, 정확한 방식은 모르겠다.
- `include`
  프로젝트에 포함할 파일 이름이나 패턴 배열을 지정하는 옵션으로, `tsconfig.json` 파일이 존재하는 디렉토리와 관련있다.
  주로, Glob 패턴을 위해 와일드카드를 활용하여 패턴 배열을 표시한다.
  - `*`: 0개 혹은 그 이상의 문자가 일치하는 패턴(디렉토리 구분자를 제외한다.)
  - `?`: 문자 1개가 일치하는 패턴(디렉토리 구분자를 제외한다.)
  - `**/`: 모든 하위 디렉토리를 포함하는 패턴
  - Glob 패턴에 파일 확장자가 포함되지 않는 경우에는 지원되는 확장자를 가진 파일만 포함된다.
- `exclude`
  `include` 옵션을 확인할 때 생략할 파일 이름이나 패턴 배열을 지정하는 옵션으로, 기본값으로 `node_modules`, `bower_compo`가 포함된다. 다만, `include` 옵션으로 포함된 파일 혹은 디렉토리 중에서 생략하는 것임에 유의해야 한다.
- `reference`
  TypeScript 프로그램을 더 작은 조각으로 구성하는 방법으로, 빌드 시간을 개선, 컴포넌트 분리 등을 통해 코드를 새롭고 개선된 방식으로 구성할 수 있다. 자세한 내용은 [여기](https://www.typescriptlang.org/docs/handbook/project-references.html)서 확인할 수 있다.

### Compiler Options

TypeScript 언어가 작동하는 방식을 다루는 다양한 옵션을 포함하고 있다.

- `baseUrl`
  기본 디렉토리를 설정해, 절대 경로를 활용할 수 있는 루트 디렉토리를 정의할 수 있다.
  즉, `“baseUrl”: “./”`인 경우 TypeScript는 `tsconfig.json`과 동일한 디렉토리에서 시작하는 파일을 찾게 된다.
- `module`
  프로젝트의 모듈 시스템을 설정하는 옵션으로, 주로 `ES2020`, `ESNext`, `CommonJS` 등을 활용한다.
- `target`
  프로젝트에 작성된 코드의 버전을 설정하는 옵션으로, 기본값으로 `ES3`가 설정되어 있다. 구 버전 브라우저와의 호환을 위해 `ES5`를 설정하는 경우도 있으나, 주로 `ES6`로 설정한다. `ESNext`는 TypeScript가 지원하는 가장 높은 버전을 의미한다.
- `lib`
  JavaScript의 기본 API와 브라우저 환경에서의 타입 정의에 대한 포함 여부를 설정하는 옵션이다.
  - 주로 `DOM`, `DOM.iterable`, `ESNext`를 포함한다.
- `allowJs`
  `ts`, `tsx` 확장자를 가진 파일 이외에도 JavaScript 파일을 활용할 수 있는지 여부를 설정하는 옵션으로, `true`로 설정하는 경우 `js`, `jsx` 확장자 파일을 사용할 수 있다.
- `skipLibCheck`
  타입 선언 파일, `d.ts` 확장자를 가진 파일의 타입 체크를 생략할 지를 설정하는 옵션이다. `true`로 설정하는 경우 타입 시스템의 정확성을 어느 정도 포기하면서 컴파일 시간을 절약할 수 있다.
- `strict`
  타입 시스템의 정확성을 더 강하게 보장하는 광범위한 타입 체크를 가능하게 하는 옵션이다. `true`로 설정하고, 개별 타입 체크 방식을 해제할 수 있다.
- `forceConsistentCasingInFileNames`
  실행 중인 파일 시스템의 대소문자 구분 규칙을 따르게 될 지 설정하는 옵션으로, `true`로 설정하는 경우 import 구문에서 대소문자를 정확히 작성하지 않으면 파일을 찾을 수 없게 된다.
- `noEmit`
  Babel, SWC와 같은 다른 도구가 TypeScript 파일을 JavaScript 환경에서 실행할 수 있는 파일로 변환하는 것을 처리할 수 있는 공간을 만드는 옵션이다.
  → 무슨 말인지 모르겠다.
- `esModuleInterop`
  모듈의 호환성을 위해 사용하는 옵션이다.
- `module`
  모듈 시스템을 설정하는 옵션으로 기본값은 `CommonJS`이지만 일반적으로 트리 쉐이킹을 위해 `ESNext`, `ES2020` 등을 활용한다.
- `moduleResolution`
  모듈의 경로 탐색 방식을 설정하는 옵션이다.
- `resolveJsonModule`
  `json` 확장자로 설정된 모듈의 import를 허용하는 옵션으로, 이렇게 불러오는 데이터는 타입 추론이 되지 않기 때문에 `ts` 파일로 만드는 것이 좋다.
- `isolatedModules`
  TypeScript 코드에서 JavaScript 코드를 생성할 수 있으나, Babel 등 다른 트랜스파일러를 활용하는 것이 일반적이다. 다만, 이러한 트랜스파일러는 하나의 파일에서만 작동하므로 타입 시스템에 따라 달라지는 코드 변환을 적용할 수 없기에 해당 옵션을 설정하여 처리해줄 수 있다.
  → 무슨 말인지 모르겠다.
- `jsx`
  `jsx` 확장자를 가진 파일을 TypeScript로 변환할 때 어떻게 처리할 지에 대한 옵션으로, 출력 결과물이 어떻게 나오는지에 대한 옵션이다.
- `incremental`
  이전 컴파일 정보를 확인하고 마치 React Virtual DOM처럼 변화한 파일만 추가적으로 컴파일하게 하는 옵션이다.
- `sourceMap`
  sourceMap 파일을 생성할지 여부를 설정하는 옵션이다.

## 마무리

아직 잘 모르는 설정들이 많아서 조금 더 검색과 학습을 해봐야겠다. 🙌
