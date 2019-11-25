import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies: Array<Movie> = [];
  genero: String = '';
  
  constructor(private movieService: MovieService) {}

  ngOnInit(){
    this.movieService.getMovies()
    .subscribe(
      (data) => this.movies = Object.values(data),
      (error) => console.error(error)   
    )
  }

  searchByGenre(event: any){
    
    this.genero = event.target.value;
    this.movieService.getMoviesByGenre(this.genero)
    .subscribe(
      (data) => this.movies = Object.values(data),
      (error) => console.error(error)   
    )
    
  }
}


  
