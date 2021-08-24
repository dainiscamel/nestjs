import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcasts } from './entities/podcasts.entities';
import { Episode } from './entities/episode.entities';
@Injectable()
export class PodcastsService {
  private podcasts: Podcasts[] = [];
  private episodes : Episode[] = [];

  getAll(): Podcasts[] {
    return this.podcasts;
  }

  getOne(id: number): Podcasts {
    const podcasts = this.podcasts.find((podcasts) => podcasts.id === id);
    if (!podcasts) {
      throw new NotFoundException(`podcasts with ID ${id} not found.`);
    }
    return this.podcasts.find(podcast => podcast.id === id);
  }

  getOneEpisode(edisodeId: number): Episode {
    const episodes = this.episodes.find((episodes) => episodes.id === edisodeId);
    if (!episodes) {
      throw new NotFoundException(`episodes with ID ${edisodeId} not found.`);
    }
    return episodes;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter(movie => movie.id !== id);
  }

  create(podcastData) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData, 
    });
  }

  update(id: number, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...movie, ...updateData });
  }

  // Episode
  getAllEpisode(): Episode[] {
    return this.episodes;
  }

  createEpisode(episodeData) {
    this.episodes.push({
      id: this.episodes.length + 1,
      ...episodeData, 
    });
  }

  updateEpisode(podcastsId: number, episodeId:number,updateData) {
    console.log(podcastsId,episodeId);
    const podcast = this.getOne(podcastsId);
    const episode = this.getOneEpisode(episodeId);
    this.deleteOne(episodeId);
    this.episodes.push({ ...podcast,...episode ,...updateData });
  }

  removeEpisode(episodeId: number) {
    this.getOneEpisode(episodeId);
    this.episodes = this.episodes.filter(episode => episode.id !== episodeId);
  }
}
