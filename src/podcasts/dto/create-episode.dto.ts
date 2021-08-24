import { IsString, IsNumber } from 'class-validator';

export class CreateEpisodeDto {
  @IsString()
  readonly program: string;

  @IsNumber()
  readonly runningTime: number;

  @IsString()
  readonly frequency: string;

  @IsString()
  readonly copyright: string;
}