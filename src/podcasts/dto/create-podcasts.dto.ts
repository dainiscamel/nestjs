import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Episode } from '../entities/episode.entities';

export class CreatePodcastDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly category: string;

  @IsNumber()
  readonly rating: number;

  @IsOptional()
  @IsString({ each: true })
  readonly episodes: Episode[];
}