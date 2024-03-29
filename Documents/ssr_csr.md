## CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.

![CSR.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1acdc287-0c16-44ac-ae57-f1464681d879/CSR.png)

React.js, Vue.js, Angular.js 등이 나오기 이전의 초기 웹 환경에서는 서버에서 모든 페이지를 빌드하고 클라이언트(브라우저)에서는 별도의 처리 없이 웹 페이지를 노출만하는 Server Rendering 방식으로 페이지를 구성했다. 이러한 Server Rendering 방식은 서버에서 데이터를 포함하여 모든 페이지를 구성한 후 클라이언트(브라우저)에 전달하는데, 유저의 페이지 이동, 클릭, 스크롤 등으로 인해 새로운 요청이 생길 때마다 해당 과정을 반복하게 되어 서버에 부하를 주고, 불필요한 부분까지 다시 렌더링되는 성능적인 문제가 존재했다.

이후 AJAX 등 데이터 전송 기술과 React.js, Vue.js, Angular.js 등을 활용하여 XML, JSON 형태의 데이터를 받아 JavaScript 로 페이지를 동적으로 구성하는 Client-Side Rendering 방식을 적용하기 시작했다.

Client-Side Rendering 방식은 JavaScript를 최대한도로 활용해 HTML, CSS를 동적으로 생성하여 완전히 페이지를 만들기 때문에 컴포넌트 단위로 코드를 분리하고, 다양한 디자인 패턴을 적용하는 등의 클라이언트 개발의 수준을 한단계 발전시켰다. 또한, 전체 페이지의 로딩 없이 라우팅 기능을 적용할 수 있게 하며 UX를 향상시키는 장점과 전체 페이지가 로딩된 이후에는 필요한 데이터만 갱신하면 되기 때문에 서버에 부하를 덜 줄 수 있다는 장점도 있다.

다만, Client-Side Rendering 방식은 초기 전송되는 페이지의 속도는 빠르지만 서비스에서 필요한 데이터를 클라이언트(브라우저)에서 추가적으로 요청해 재구성하므로, 전체적인 페이지 구성 완료 시점이 느려지기 때문에 어플리케이션 로딩 시점이 느려진다. 이러한 초기 진입 속도가 느리다는 단점을 개선하기 위해 Code Splitting 등의 방식을 적용하기도 한다. 추가적으로 검색 엔진이 전체적인 페이지 구성을 확인할 수 없기 때문에 SEO가 좋지 않다는 단점이 있다.

더 상세하게 확인해보면, Client-Side Rendering 방식은 웹 퍼포먼스 측정 메트릭 중 TTFB(Time to First Byte)는 빠르지만, 클라이언트(브라우저)에서 JavaScript를 활용해 데이터 등을 요청하고 응답받아 페이지를 빌드하는 과정을 거쳐야 하기 때문에 FCP(First Contentful Paint)나 TTI(Time to Interactive)는 느리다는 문제가 있다. 즉, 페이지 요청 후 처음 데이터가 도착하기까지 걸리는 시간은 짧지만, 페이지 진입 이후 브라우저가 첫 번째 DOM 컨텐츠를 만들 때까지 걸리는 시간과 페이지 진입 이후 유저의 행위를 하기까지 걸리는 시간이 오래 걸린다는 것이다.

결국, Client-Side Rendering 방식은 페이지의 로드 이후 동적으로 컨텐츠를 생성하기 때문에 컨텐츠를 빠르게 소비하고자 하는 사용자가 많은 경우 그들의 요구에 맞추지 못할 가능성이 높다.

---

## SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

![SSR.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f593e20b-4534-4f26-95e1-0f92859906ff/SSR.png)

> SPA(Single Page Application)는 단일 페이지 어플리케이션으로 현재의 페이지를 동적으로 작성하여 사용자와 소통하는 웹 어플리케이션이다. 연속되는 페이지 간의 UX를 향상시키고, 웹 어플리케이션이 데스크톱 어플리케이션처럼 동작하도록 도와준다.

기존의 SPA로 구성된 웹 앱에서 Client-Side Rendering 방식을 활용하면, 페이지 진입 시 리로드 없이 라우팅하고, AJAX 기술을 활용해 페이지 이동 시 서버에 데이터만 요청해 JavaScript로 페이지를 만들기 때문에 첫 요청 시에는 빈 페이지를 받게 된다.

Client-Side Rendering 방식의 SPA(Single Page Application)는 결국, 서버에서 페이지를 만들지 않아 CDN 캐싱이 쉽고, 매번 페이지 요청을 하지 않으므로 네트워크 요청이 감소하는 장점이 있지만, SEO에 불리하고, 하나의 JavaScript 앱이 지속되므로 메모리 관리, 성능, 데이터의 활용 등이 중요하며 하나의 JavaScript 앱을 응답받기 때문에 코드가 많아질수록 로딩 속도가 느려진다는 단점도 존재한다.

과거의 Server Rendering 방식과 Client-Side Rendering 방식의 단점을 개선하기 위해 Server-side Rendering 방식을 활용하게 됐다. 즉, 점점 앱이 고도화되고 규모가 거대화될수록 로딩 속도가 느려지는 문제는 크게 다가올 수 밖에 없고, 유저들은 빠르게 컨텐츠를 소비하고자 하기 때문에 Client-Side Rendering 방식을 활용한 SPA(Single Page Application)의 한계는 더더욱 커져갔다.

Server-side Rendering 방식은 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식을 의미한다. 즉, 서버에서 JavaScript를 이용하여 컴포넌트 생성에 필요한 API 콜, 라우팅, Redux Store 생성 등을 처리하여 페이지를 미리 빌드하고, 클라이언트(브라우저)는 빌드된 페이지와 JavaScript를 받아 웹 앱을 동작시키는 방식을 Server-side Rendering 방식이라 한다.

Server-side Rendering 방식의 가장 큰 장점은 모든 데이터가 매핑된 서비스 페이지를 클라이언트(브라우저)에게 바로 보여줄 수 있다는 점이다. 서버를 활용해 페이지를 구성하므로 Client-Side Rendering 방식보다 페이지를 구성하는 속도는 늦어지나, 전체적으로 사용자에게 보여주는 컨텐츠 구성은 빠르게 완료된다.

추가적으로 검색 엔진의 크롤러는 페이지를 인덱싱하기 위해 페이지에 대한 정보를 필요로하는데, Client-Side Rendering 방식으로는 빈 페이지가 처음에 응답되므로 해당 정보를 활용할 수 없지만, Server-side Rendering 방식을 활용하면 페이지가 미리 빌드되어 Client-Side Rendering 방식과 달리 검색 엔진 크롤러에 보다 많은 정보를 제공할 수 있어 SEO에 유리하다.

Server-side Rendering 방식의 환경을 구축하는 경우 페이지의 소유권이 온전히 프론트엔드 영역에 존재하므로, 페이지가 변경될 때마다 불필요한 API 콜이나 백엔드 서버와의 커뮤니케이션을 할 필요가 없어지게 된다는 장점도 존재한다.

더 자세하게 웹 퍼포먼스 메트릭 측면에서 살펴보면, Server-side Rendering 방식의 경우 서버에서 페이지를 미리 빌드한 후 클라이언트(브라우저)에 응답하기 때문에 TTFB(Time to First Byte)는 Client-Side Rendering 방식에 비해 시간이 소요되지만, FCP(First Contentful Paint)의 경우 미리 빌드한 페이지를 보여주므로 유저가 빠르게 페이지의 내용을 볼 수 있다. 또한, 서버 자원을 활용해 초기 큰 성능이 필요한 페이지 등을 빌드하는 데 활용하기 좋다.

---

## Next.js 프로젝트를 세팅한 뒤 yarn start 스크립트를 실행했을 때 실행되는 코드를 nextjs github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

Next.js 프로젝트를 세팅하고 빌드한 후 start 스크립트를 실행하면, `.next` 폴더에 빌드된 파일이 생성되며, 이를 배포하게 된다.

다만 `yarn start` 명령어를 바로 입력하면 아래와 같은 에러가 발생한다.

```jsx
yarn run v1.22.19
$ next start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
Error: Could not find a production build in the 'C:\Users\hyoun\Desktop\new\.next' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id
    at NextNodeServer.getBuildId (C:\Users\hyoun\Desktop\new\node_modules\next\dist\server\next-server.js:169:23)
    at new Server (C:\Users\hyoun\Desktop\new\node_modules\next\dist\server\base-server.js:58:29)
    at new NextNodeServer (C:\Users\hyoun\Desktop\new\node_modules\next\dist\server\next-server.js:70:9)
    at NextServer.createServer (C:\Users\hyoun\Desktop\new\node_modules\next\dist\server\next.js:140:16)
    at async C:\Users\hyoun\Desktop\new\node_modules\next\dist\server\next.js:149:31
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

해당 에러를 살펴보면, 프로덕션 서버를 시작하기 전에 `next build` 명령어를 통해 앱을 빌드하는 과정을 거쳐야 한다고 말한다. 에러가 발생한 지점인 `node_modules/next/dist/server/next-server.js`의 코드를 보면, `this.distDir`에 `buildFile`이 존재하지 않으면 위 에러 메시지를 던지는 것을 확인할 수 있다.

```jsx
getBuildId() {
        const buildIdFile = (0, _path).join(this.distDir, _constants.BUILD_ID_FILE);
        try {
            return _fs.default.readFileSync(buildIdFile, "utf8").trim();
        } catch (err) {
            if (!_fs.default.existsSync(buildIdFile)) {
                throw new Error(`Could not find a production build in the '${this.distDir}' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id`);
            }
            throw err;
        }
    }
```

이때, 정상적으로 앱이 빌드되어 있는 경우에는 `readFileSync`를 활용해 `utf-8`으로 해당 파일을 불러와 프로덕션 서버가 정상적으로 실행될 것을 예상해볼 수 있다.

그렇다면, 우선 `build` 명령어로 앱을 빌드해보자.

[npm build.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9257520-876d-4dc4-952e-20d29ca8f39b/npm_build.mp4)

```jsx
yarn run v1.22.19
$ next build
info  - Linting and checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (3/3)
info  - Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                      5.34 kB        83.1 kB
├   └ css/ae0e3e027412e072.css             707 B
├   /_app                                  0 B            77.7 kB
├ ○ /404                                   182 B          77.9 kB
└ λ /api/hello                             0 B            77.7 kB
+ First Load JS shared by all              78 kB
  ├ chunks/framework-ed075df0e0b45174.js   45.5 kB
  ├ chunks/main-e7a7892cb0edc024.js        31 kB
  ├ chunks/pages/_app-7a7f6d01b75c52d8.js  497 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/ab44ce7add5c3d11.css               247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

Done in 18.09s.
```

빌드가 완료된 뒤에는 빌드한 앱이 존재해야 하는 위치인 `.next` 디렉토리를 확인해보면 다음과 같다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8768045-39b8-4bb1-97c9-0c3819cab6e8/Untitled.png)

즉, 이러한 `buildFile`이 존재하는 경우에는 프로덕션 서버가 정상적으로 구동된다.

이제 Next.js의 실제 코드에서 `start` 명령어 입력 시에 어떤 방식으로 동작하는 지를 파악해보자.

[npm start.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/402b9f0a-406b-4e86-b59f-7fb15806d62c/npm_start.mp4)

먼저, `package/next/cli/next-start.ts`를 확인하면, start 명령어가 입력되었을 때 어떤 코드가 동작하는 지 확인할 수 있다.

```tsx
#!/usr/bin/env node

import arg from 'next/dist/compiled/arg/index.js';
import { startServer } from '../server/lib/start-server';
import { getPort, printAndExit } from '../server/lib/utils';
import * as Log from '../build/output/log';
import isError from '../lib/is-error';
import { getProjectDir } from '../lib/get-project-dir';
import { cliCommand } from '../lib/commands';

const nextStart: cliCommand = (argv) => {
  // 해당 부분은 명령어를 입력 시 추가한 옵션에 대한 처리를 하는 것으로 보인다.
  const validArgs: arg.Spec = {
    // Types
    '--help': Boolean,
    '--port': Number,
    '--hostname': String,
    '--keepAliveTimeout': Number,

    // Aliases
    '-h': '--help',
    '-p': '--port',
    '-H': '--hostname',
  };
  let args: arg.Result<arg.Spec>;
  try {
    args = arg(validArgs, { argv });
  } catch (error) {
    if (isError(error) && error.code === 'ARG_UNKNOWN_OPTION') {
      return printAndExit(error.message, 1);
    }
    throw error;
  }
  if (args['--help']) {
    console.log(`
      Description
        Starts the application in production mode.
        The application should be compiled with \`next build\` first.

      Usage
        $ next start <dir> -p <port>

      <dir> represents the directory of the Next.js application.
      If no directory is provided, the current directory will be used.

      Options
        --port, -p      A port number on which to start the application
        --hostname, -H  Hostname on which to start the application (default: 0.0.0.0)
        --keepAliveTimeout  Max milliseconds to wait before closing inactive connections
        --help, -h      Displays this message
    `);
    process.exit(0);
  }

  // 프로덕션 서버 실행에 필요한 변수를 처리
  const dir = getProjectDir(args._[0]);
  const host = args['--hostname'] || '0.0.0.0';
  const port = getPort(args);

  const keepAliveTimeoutArg: number | undefined = args['--keepAliveTimeout'];
  if (
    typeof keepAliveTimeoutArg !== 'undefined' &&
    (Number.isNaN(keepAliveTimeoutArg) ||
      !Number.isFinite(keepAliveTimeoutArg) ||
      keepAliveTimeoutArg < 0)
  ) {
    printAndExit(
      `Invalid --keepAliveTimeout, expected a non negative number but received "${keepAliveTimeoutArg}"`,
      1,
    );
  }

  const keepAliveTimeout = keepAliveTimeoutArg
    ? Math.ceil(keepAliveTimeoutArg)
    : undefined;

  // 프로덕션 서버 실행시키는 부분
  startServer({
    dir,
    hostname: host,
    port,
    keepAliveTimeout,
  })
    .then(async (app) => {
      const appUrl = `http://${app.hostname}:${app.port}`;
      Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`);
      await app.prepare();
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export { nextStart };
```

먼저, `start` 명령어를 입력할 때 입력된 옵션에 대한 처리를 하는 부분이 존재하는 것 같다. 이후 하단부의 코드를 보면 `dir`, `host`, `port`, `keepAliveTimeout`을 받아 `startServer`를 함수를 활용해 서버를 실행시킨다.

그렇다면 `startServer`는 서버를 실행시키기 위해서 어떤 동작을 하는지 파악하기 위해 `package/next/server/lib/start-server.ts`를 확인해봤다.

```tsx
import type { NextServerOptions, NextServer, RequestHandler } from '../next'
import { warn } from '../../build/output/log'
import http from 'http'
import next from '../next'

interface StartServerOptions extends NextServerOptions {
  allowRetry?: boolean
  keepAliveTimeout?: number
}

export function startServer(opts: StartServerOptions) {
  let requestHandler: RequestHandler


	**// node의 http 메서드로 서버 만들기**
  const server = http.createServer((req, res) => {
    return requestHandler(req, res)
  })

  if (opts.keepAliveTimeout) {
    server.keepAliveTimeout = opts.keepAliveTimeout
  }

  return new Promise<NextServer>((resolve, reject) => {
    let port = opts.port
    let retryCount = 0

		**// 에러 발생한 경우**
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (
        port &&
        opts.allowRetry &&
        err.code === 'EADDRINUSE' &&
        retryCount < 10
      ) {
        warn(`Port ${port} is in use, trying ${port + 1} instead.`)
        port += 1
        retryCount += 1
        server.listen(port, opts.hostname)
      } else {
        reject(err)
      }
    })

    let upgradeHandler: any

    if (!opts.dev) {
      server.on('upgrade', (req, socket, upgrade) => {
        upgradeHandler(req, socket, upgrade)
      })
    }

		**// 서버가 실행된 경우**
    server.on('listening', () => {
      const addr = server.address()
      const hostname =
        !opts.hostname || opts.hostname === '0.0.0.0'
          ? 'localhost'
          : opts.hostname

      const app = next({
        ...opts,
        hostname,
        customServer: false,
        httpServer: server,
        port: addr && typeof addr === 'object' ? addr.port : port,
      })

      requestHandler = app.getRequestHandler()
      upgradeHandler = app.getUpgradeHandler()
      resolve(app)
    })

    server.listen(port, opts.hostname)
  })
}
```

인자로 받은 서버 관련 변수들과 node의 `http` 메서드를 통해 서버를 만들고, 에러가 발생한 경우에는 port 번호가 겹치는 지 우선 확인하고, 서버를 reject한다.

서버가 `listen` 메서드로 제대로 실행된 경우에는 서버 `address`와 `hostname` 등을 `next` 함수에 인자로 전달하여 app을 선언하는 것을 확인할 수 있다.

그렇다면, `next` 함수는 어떤 동작을 하는지 또 알아보기 위해 `package/next/server/next.ts`를 확인해보자.

```tsx
import type { Options as DevServerOptions } from './dev/next-dev-server'
import type { NodeRequestHandler } from './next-server'
import type { UrlWithParsedQuery } from 'url'

import './node-polyfill-fetch'
import { default as Server } from './next-server'
import * as log from '../build/output/log'
import loadConfig from './config'
import { resolve } from 'path'
import { NON_STANDARD_NODE_ENV } from '../lib/constants'
import { PHASE_DEVELOPMENT_SERVER } from '../shared/lib/constants'
import { PHASE_PRODUCTION_SERVER } from '../shared/lib/constants'
import { IncomingMessage, ServerResponse } from 'http'
import { NextUrlWithParsedQuery } from './request-meta'
import { shouldUseReactRoot } from './utils'

let ServerImpl: typeof Server

const getServerImpl = async () => {
  if (ServerImpl === undefined)
    ServerImpl = (await Promise.resolve(require('./next-server'))).default
  return ServerImpl
}

export type NextServerOptions = Partial<DevServerOptions>

export interface RequestHandler {
  (
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl?: NextUrlWithParsedQuery | undefined
  ): Promise<void>
}

**// 서버에 관련된 여러 메서드와 렌더링에 관련된 여러 메서드를 가진 NextServer 클래스**
export class NextServer {
  private serverPromise?: Promise<Server>
  private server?: Server
  private reqHandlerPromise?: Promise<NodeRequestHandler>
  private preparedAssetPrefix?: string
  public options: NextServerOptions

  constructor(options: NextServerOptions) {
    this.options = options
  }

  get hostname() {
    return this.options.hostname
  }

  get port() {
    return this.options.port
  }

  getRequestHandler(): RequestHandler {
    return async (
      req: IncomingMessage,
      res: ServerResponse,
      parsedUrl?: UrlWithParsedQuery
    ) => {
      const requestHandler = await this.getServerRequestHandler()
      return requestHandler(req, res, parsedUrl)
    }
  }

  getUpgradeHandler() {
    return async (req: IncomingMessage, socket: any, head: any) => {
      const server = await this.getServer()
      // @ts-expect-error we mark this as protected so it
      // causes an error here
      return server.handleUpgrade.apply(server, [req, socket, head])
    }
  }

  setAssetPrefix(assetPrefix: string) {
    if (this.server) {
      this.server.setAssetPrefix(assetPrefix)
    } else {
      this.preparedAssetPrefix = assetPrefix
    }
  }

  logError(...args: Parameters<Server['logError']>) {
    if (this.server) {
      this.server.logError(...args)
    }
  }

  async render(...args: Parameters<Server['render']>) {
    const server = await this.getServer()
    return server.render(...args)
  }

  async renderToHTML(...args: Parameters<Server['renderToHTML']>) {
    const server = await this.getServer()
    return server.renderToHTML(...args)
  }

  async renderError(...args: Parameters<Server['renderError']>) {
    const server = await this.getServer()
    return server.renderError(...args)
  }

  async renderErrorToHTML(...args: Parameters<Server['renderErrorToHTML']>) {
    const server = await this.getServer()
    return server.renderErrorToHTML(...args)
  }

  async render404(...args: Parameters<Server['render404']>) {
    const server = await this.getServer()
    return server.render404(...args)
  }

  async serveStatic(...args: Parameters<Server['serveStatic']>) {
    const server = await this.getServer()
    return server.serveStatic(...args)
  }

  async prepare() {
    const server = await this.getServer()
    return server.prepare()
  }

  async close() {
    const server = await this.getServer()
    return (server as any).close()
  }

  private async createServer(options: DevServerOptions): Promise<Server> {
    if (options.dev) {
      const DevServer = require('./dev/next-dev-server').default
      return new DevServer(options)
    }
    const ServerImplementation = await getServerImpl()
    return new ServerImplementation(options)
  }

  private async loadConfig() {
    return loadConfig(
      this.options.dev ? PHASE_DEVELOPMENT_SERVER : PHASE_PRODUCTION_SERVER,
      resolve(this.options.dir || '.'),
      this.options.conf
    )
  }

  private async getServer() {
    if (!this.serverPromise) {
      setTimeout(getServerImpl, 10)
      this.serverPromise = this.loadConfig().then(async (conf) => {
        this.server = await this.createServer({
          ...this.options,
          conf,
        })
        if (this.preparedAssetPrefix) {
          this.server.setAssetPrefix(this.preparedAssetPrefix)
        }
        return this.server
      })
    }
    return this.serverPromise
  }

  private async getServerRequestHandler() {
    // Memoize request handler creation
    if (!this.reqHandlerPromise) {
      this.reqHandlerPromise = this.getServer().then((server) =>
        server.getRequestHandler().bind(server)
      )
    }
    return this.reqHandlerPromise
  }
}

// This file is used for when users run `require('next')`
function createServer(options: NextServerOptions): NextServer {
  if (options == null) {
    throw new Error(
      'The server has not been instantiated properly. https://nextjs.org/docs/messages/invalid-server-options'
    )
  }

  if (
    !('isNextDevCommand' in options) &&
    process.env.NODE_ENV &&
    !['production', 'development', 'test'].includes(process.env.NODE_ENV)
  ) {
    log.warn(NON_STANDARD_NODE_ENV)
  }

  if (options.dev && typeof options.dev !== 'boolean') {
    console.warn(
      "Warning: 'dev' is not a boolean which could introduce unexpected behavior. https://nextjs.org/docs/messages/invalid-server-options"
    )
  }

  if (shouldUseReactRoot) {
    ;(process.env as any).__NEXT_REACT_ROOT = 'true'
  }

	**// NextServer 인스턴스를 반환하는 createServer 함수**
  return new NextServer(options)
}

// Support commonjs `require('next')`
module.exports = createServer
exports = module.exports

// Support `import next from 'next'`
export default createServer
```

해당 파일에는 서버의 `port`, `config`, `RequestHandler`, `close` 등을 처리하는 메서드들과 렌더링에 관련된 `render`, `renderToHTML`, `renderError` 등의 메서드를 가진 `NextServer` 클래스가 존재한다.

이를 기반으로 `createServer` 함수가 `NextServer` 인스턴스를 반환하고 있다. 즉, `package/next/server/lib/start-server.ts`에서의 `app`은 `createServer` 함수가 반환하는 `NextServer` 인스턴스가 된다.

위 파일을 찾다가 보니 동일한 디렉토리 내에 `render.tsx`가 존재해서, 뭔가 렌더링과 관련된 로직이 존재할 것이라고 생각하고 열어봤더니 수많은 코드가 존재했다.

```tsx
// ...

export async function renderToHTML(
  req: IncomingMessage,
  res: ServerResponse,
  pathname: string,
  query: NextParsedUrlQuery,
  renderOpts: RenderOpts,
): Promise<RenderResult | null> {
  // ...
}
```

해당 파일에 `renderToHTML` 함수가 존재하는데, 이는 DOM을 렌더링하는 것 같았다. 특히 코드가 엄청 길어서 세세히 확인하지는 못했지만, 다음과 같은 코드를 파악했다.

```tsx
export async function renderToHTML( ... ) {

	// Head 태그 관련?
	const headTags = (...args: any) => callMiddleware('headTags', args)

	// getStaticProps로 처리한 부분에 관련한 로직
  const isSSG = !!getStaticProps
	// ...
	if (
    (isSSG || getServerSideProps) &&
    !isFallback &&
    process.env.NEXT_RUNTIME !== 'edge'
  ) {
    // Reads of this are cached on the `req` object, so this should resolve
    // instantly. There's no need to pass this data down from a previous
    // invoke, where we'd have to consider server & serverless.
    previewData = tryGetPreviewData(req, res, previewProps)
    isPreview = previewData !== false
  }

	// Provider를 통해 Context API로 상태를 주입하는 코드?
	const AppContainer = ({ children }: { children: JSX.Element }) => (
    <RouterContext.Provider value={router}>
      <AmpStateContext.Provider value={ampState}>
        <HeadManagerContext.Provider
          value={{
            updateHead: (state) => {
              head = state
            },
            updateScripts: (scripts) => {
              scriptLoader = scripts
            },
            scripts: initialScripts,
            mountedInstances: new Set(),
          }}
        >
          <LoadableContext.Provider
            value={(moduleName) => reactLoadableModules.push(moduleName)}
          >
            <StyleRegistry registry={jsxStyleRegistry}>
              <ImageConfigContext.Provider value={images}>
                {children}
              </ImageConfigContext.Provider>
            </StyleRegistry>
          </LoadableContext.Provider>
        </HeadManagerContext.Provider>
      </AmpStateContext.Provider>
    </RouterContext.Provider>
  )

	// getServerSideProps와 관련된 로직
	if (getServerSideProps) {
    props[SERVER_PROPS_ID] = true
  }

	if (getServerSideProps && !isFallback) {
		// ...
		try {
      data = await getServerSideProps({
        req: req as IncomingMessage & {
          cookies: NextApiRequestCookies
        },
        res: resOrProxy,
        query,
        resolvedUrl: renderOpts.resolvedUrl as string,
        ...(pageIsDynamic ? { params: params as ParsedUrlQuery } : undefined),
        ...(previewData !== false
          ? { preview: true, previewData: previewData }
          : undefined),
        locales: renderOpts.locales,
        locale: renderOpts.locale,
        defaultLocale: renderOpts.defaultLocale,
      })
      canAccessRes = false
    } catch (serverSidePropsError: any) {
      // remove not found error code to prevent triggering legacy
      // 404 rendering
      if (
        isError(serverSidePropsError) &&
        serverSidePropsError.code === 'ENOENT'
      ) {
        delete serverSidePropsError.code
      }
      throw serverSidePropsError
    }
	//...
	}

	// __next id를 가진 div를 찾았다
	const Body = ({ children }: { children: JSX.Element }) => {
    return inAmpMode ? children : <div id="__next">{children}</div>
  }
}
```

전부 코드를 이해할 수는 없었지만, start 명령어를 무작정 입력해 프로덕션 서버를 실행하는 것과 다르게, 내부 구조를 조금이나마 확인해보니 어떻게 동작하는지를 미세하게 알 듯 했다.

다만, 명확한 동작 방식이나 원리까지 파악하지 못해 아쉬운 마음이 남는다.

그래도 솔직히 매번 `dev` 서버를 열고 개발을 진행하며 개발자 도구를 볼 때 확인하던 `<div id="__next"></div>`를 직접 눈으로 확인해서 조금 뿌듯하고 신기했다.

## 참고 자료 리스트

- [어서와 SSR은 처음이지 - 도입편](https://d2.naver.com/helloworld/7804182)
- [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8), 이미지
- \***\*[SSR vs CSR 비교 설명, Next.js가 탄생하게 된 이유](https://www.sarah-note.com/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9/posting2/)\*\***
- [The Next.js Handbook – Learn Next.js for Beginners](https://www.freecodecamp.org/news/the-next-js-handbook/#the-main-features-provided-by-next-js)
- [Next.js 장점 치면 SEO만 나온다 ㅋㅋㅋ](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=qls0147&logNo=221845782187)
- [Understanding `next build` and the deployment process](https://github.com/vercel/next.js/discussions/14339)
- [Next.js Getting Started](https://nextjs.org/docs/getting-started)
- [Next.js Github](https://github.com/vercel/next.js/)
