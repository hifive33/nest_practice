import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Array<Movie> {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDto) {
    return this.moviesService.create(movie);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() movie: UpdateMovieDto) {
    return this.moviesService.update(id, movie);
  }
}
