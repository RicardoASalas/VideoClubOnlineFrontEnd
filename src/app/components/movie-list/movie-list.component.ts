import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../../services/movieService/movie.service';
import { Movie } from '../../models/movie.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetailsComponent, DialogData } from '../movie-details/movie-details.component';
import { UserService } from '../../services/userService/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  movies: Array<Movie> = [];
  movieSearched: String = '';
  movieRented: any;
  rentingDays: any;
  token: any;
  response: any;


  constructor(
    private movieService: MovieService,
    public dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(
        (data) => this.movies = Object.values(data),
        (error) => console.error(error)
      )
  }
  searchMovies(event: any) {
    this.movieSearched = event.target.value


    this.movieService.getMoviesByGenre(this.movieSearched)
      .subscribe(
        (data) => this.movies = Object.values(data),
        (error) => {
          console.error(error)
          this.movieService.getMoviesByTitle(this.movieSearched)
            .subscribe(
              (data) => this.movies = Object.values(data),
              (error) => console.error(error)
            )
        }
      )
  }
  openDialog(movie): void {
    this.dialog.closeAll()
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '600px',
      height: '500px',
      data: movie
    });

    dialogRef.afterClosed()
      .subscribe(result => {
       
        this.movieRented = result;
        console.log("la pelicula alquilada es " + this.movieRented)
        this.token = localStorage.getItem('Authorization')
        if(!this.token){
          this.router.navigate(['login']);
        }else{

        this.userService.rentMovie(this.movieRented, this.token)
          .subscribe(
            (data) => {
              this.response = Object.values(data)
              alert(this.response)
              console.log(Object.values(data))
            },
            (error) => console.error(error)

          )
      }});

  }

}








