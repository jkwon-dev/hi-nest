import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieServvice: MoviesService){}

    @Get()
    getAll() : Movie[] {
        return this.movieServvice.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        return this.movieServvice.getOne(movieId); 
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.movieServvice.create(movieData); 
    }

    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.movieServvice.deleteOne(movieId); 
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.movieServvice.update(movieId, updateData);
    }

   
}
