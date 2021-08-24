import { Episode } from './episode.entities';

export class Podcasts {
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: Episode[];
}
