import { IsString, IsNumber } from 'class-validator';
// mapped-types ? 타입을 변환시키고 ㅅ용할 수 있는 패키지.
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}