import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController { 
  constructor(private readonly moviesService: MoviesService){}
  @Get()
  getAll():Movie[]{
    return this.moviesService.getAll();
  }
  
  @Get(":id")
  getOne(@Param("id") movieId: string): Movie{
    return this.moviesService.getOne(movieId);
  }  

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
  // @Put 는 리소스 전체를 업데이트 하기 때문에 @Patch 를 사용하여 일부분만 업데이트 하도록 한다.
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
