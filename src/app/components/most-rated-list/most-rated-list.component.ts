import { Component, OnInit ,Inject} from '@angular/core';
import { MovieService } from '../../services/movieService/movie.service';
import { Movie } from '../../models/movie.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-most-rated-list',
  templateUrl: './most-rated-list.component.html',
  styleUrls: ['./most-rated-list.component.scss']
})
export class MostRatedListComponent implements OnInit {
  
    moviesSortedByDate: Array<Movie> = []
    movies: Array<Movie> = [];
    movieSearched: String = '';
    movieRented: any;
    rentingDays: any;
    token: any;
    response: any;
    
    constructor(private movieService: MovieService,public dialog: MatDialog, private userService: UserService) {}
  
    ngOnInit(){
    
      this.movieService.getMovies()
      .subscribe(
        (data) =>{
        this.movies = Object.values(data)
        //Ordena el array de movies por la valoracion
        this.movies.sort(function (a, b){
        
          return b.vote_average - a.vote_average;
        })
        console.log(this.movies)
      },
        (error) => console.error(error)   
      )
    }
    openDialog(movie): void {
      this.dialog.closeAll()
      const dialogRef = this.dialog.open(MovieDetailsComponent, {
        width: '600px',
        height: '500px',
        data: movie
      });
  
      dialogRef.afterClosed().subscribe(result => {
         this.movieRented = result;
         this.token = localStorage.getItem('Authorization')
         this.userService.rentMovie(this.movieRented, this.token)
         .subscribe(
          (data) =>{
            this.response=Object.values(data)
            alert(this.response)
            console.log(Object.values(data))},
          (error) => console.error(error)   
          )
         
         console.log("la pelicula alquilada es "+this.movieRented.title)
       });
    }

    
}
