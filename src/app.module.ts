import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { AppController } from './app.controller';

@Module({
  imports: [PodcastsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
