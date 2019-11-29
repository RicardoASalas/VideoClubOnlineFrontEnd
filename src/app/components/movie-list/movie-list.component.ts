import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movieService/movie.service';
// import { ErrorService } from './services/error/error.service';
import { Movie } from '../../models/movie.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies: Array<Movie> = [];
  movieSearched: String = '';
  
  constructor(private movieService: MovieService) {}

  ngOnInit(){
    this.movieService.getMovies()
    .subscribe(
      (data) =>this.movies = Object.values(data),
      (error) => console.error(error)   
    )
  }
  searchMovies(event: any){
    this.movieSearched = event.target.value
  
      
      this.movieService.getMoviesByGenre(this.movieSearched)
        .subscribe(
           (data) => this.movies = Object.values(data),      
          (error) =>{ 
            console.error(error)
            this.movieService.getMoviesByTitle(this.movieSearched)
                .subscribe(
                (data) => this.movies = Object.values(data),
                (error) => console.error(error)   
                )
            }  
         )   
  }

}


  
