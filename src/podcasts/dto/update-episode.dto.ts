import { IsString, IsNumber, IsOptional } from 'class-validator';


export class UpdateEpisodeDto {
  @IsString()
  readonly program: string;

  @IsNumber()
  readonly runningTime: number;

  @IsString()
  readonly frequency: string;

  @IsString()
  readonly copyright: string;
}