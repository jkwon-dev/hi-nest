import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
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
    getOne(@Param('id') movieId: string): Movie {
        return this.movieServvice.getOne(movieId); 
    }

    @Post()
    create(@Body() movieData) {
        return this.movieServvice.create(movieData); 
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return this.movieServvice.deleteOne(movieId); 
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return this.movieServvice.update(movieId, updateData);
    }

   
}
