import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
  private movies: Array<Movie> = [
    {
      id: 1,
      title: 'Tenet',
      year: 2020,
      genres: ['action', 'mind blown'],
    },
  ];

  getAll(): Array<Movie> {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie: Movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie: Movie) => movie.id !== id);
  }

  create(movie: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
