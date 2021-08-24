import { Controller, Get,Post,Patch, Param, Req, Res, Body, Delete } from '@nestjs/common';
import { Episode } from './entities/episode.entities';
import { Podcasts } from './entities/podcasts.entities';
import { PodcastsService } from './podcasts.service';

// GET /podcasts
// POST /podcasts
// GET /podcasts/:id
// PATCH /podcasts/:id
// DELETE /podcasts/:id
// GET /podcasts/:id/episodes
// POST /podcasts/:id/episodes
// PATCH /podcasts/:id/episodes/:episodeId
// DELETE /podcasts/:id/episodes/:episodeId

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Get('')
  getAll(): Podcasts[] {
    return this.podcastsService.getAll();
  }

  @Post('')
  create(@Body() podcastsData) {
    return this.podcastsService.create(podcastsData);
  }

  @Get(':id')
  getOne(@Param('id') podcastsId: number): Podcasts {
    return this.podcastsService.getOne(podcastsId);
  }

  @Patch(':id')
  patch(@Param('id') podcastsId: number, @Body() updateData) {
    return this.podcastsService.update(podcastsId, updateData);
  }

  @Delete(':id')
  remove(@Param('id') podcastsId: number) {
    return this.podcastsService.deleteOne(podcastsId);
  }

  // Episode
  @Get('/:id/episodes')
  getAllEpisode(): Episode[] {
    return this.podcastsService.getAllEpisode();
  }

  @Post('/:id/episodes')
  createEpisode(@Body() episodeData) {
    return this.podcastsService.createEpisode(episodeData);
  }

  @Patch('/:id/episodes/:episodeId')
  patchEpisode(@Param('id') podcastsId: number, @Param('episodeId') episodeId: number,@Body() updateData) {
    console.log(podcastsId,episodeId)
    return this.podcastsService.updateEpisode(podcastsId, episodeId,updateData);
  }

  @Delete('/:id/episodes/:episodeId')
  removeEpisode(@Param('episodeId') episodeId: number) {
    return this.podcastsService.removeEpisode(episodeId);
  }
}
