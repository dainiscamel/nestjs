import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  // Injectable Dependancy ? NestJS 가 MovieService 를 import 하고 Controller에 주입(inject)
  // MovieService에는 Injectable(= 주입 가능한) 이라는 데코레이터가 있는데,  providers 가 필요한 모든 것들을 import 해서 Controller에 타입을 추가 하는 것만으로도 코드가 잘 동작하게 된다.
  providers: [MoviesService]
})
export class MoviesModule {}
