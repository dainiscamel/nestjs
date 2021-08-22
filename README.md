# REST API using NestJS

## Setup
  - Insomnia REST (=rest api testing tool)
  - NestJS

## NestJS ?
  - node.js 의 프레임워크로 Express  위에서 **움직인다**.

## Architecture of NESTJS
  1. app : 앱 구동
  2. AppModule : 모든 것의 root 모듈
  3. AppController : handling router => url을 매핑하고, 리퀘스트를 받고, Query나 그외 (Body, Param etc ..)의 것들을 넘기는 역할.
  4. AppService : 컨트롤러에서 정의한 비지니스 로직을 실행하는 역할.

## Testing in Nest

 ### Testing ? 
 - 유닛테스팅 (=서비스에서 function과 같은 분리된 유닛을   테스트)  
 - end-to-end(=모든 시스템을 테스트로 사용자가 취할만한 액션들을 처음 부터 끝까지 테스트)
 - package.json 파일을 보면 테스팅과 관련된 스크립트가 5가지 존재.
~~~
"test": "jest",
"test:watch": "jest --watch",
"test:cov": "jest --coverage",
"test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
"test:e2e
~~~    
1. "test": "jest",
   jest 는 자바스크립트를 쉽게 테스팅하는 npm 패키지.
   .spec.ts는 테스트를 포함한 파일 예를 들어 movies.controller.ts 를 테스트 하고 싶다면 movies.controller.spec.ts 파일이 존재해야한다.
2. "test:watch": "jest --watch"
    모든 테스트 파일들을 찾아내서 관찰
3.  "test:cov": "jest --coverage"
    코드가 얼마나 테스팅 됐는지 알려준다.
