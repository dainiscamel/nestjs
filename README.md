# REST API using NestJS

## Setup
  - Insomnia REST (=rest api testing tool)
  - NestJS

## NestJS ?
  - node.js 의 프레임워크로 Express  위에서 **움직인다**.

## ARCHITECTURE OF NESTJS
  1. app : 앱 구동
  2. AppModule : 모든 것의 root 모듈
  3. AppController : handling router => url을 매핑하고, 리퀘스트를 받고, Query나 그외 (Body, Param etc ..)의 것들을 넘기는 역할.
  4. AppService : 컨트롤러에서 정의한 비지니스 로직을 실행하는 역할.