import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movieService/movie.service';
import { Movie } from '../../models/movie.model';
  

@Component({
  selector: 'app-recent-movies',
  templateUrl: './recent-movies.component.html',
  styleUrls: ['./recent-movies.component.scss']
})
export class RecentMoviesComponent implements OnInit {
  
    moviesSortedByDate: Array<Movie> = []
    movies: Array<Movie> = [];
    movieSearched: String = '';
    
    constructor(private movieService: MovieService) {}
  
    ngOnInit(){
    
      this.movieService.getMovies()
      .subscribe(
        (data) =>{
        this.movies = Object.values(data)
        //Ordena el array de movies por la fecha de estreno
        this.movies.sort(function (a, b){
        
          return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
        })
        console.log(this.movies)
      },
        (error) => console.error(error)   
      )
    }
    
}
