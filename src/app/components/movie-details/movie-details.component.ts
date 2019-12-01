import { Component, OnInit ,Inject} from '@angular/core';
import { MovieService } from '../../services/movieService/movie.service';
import { Movie } from '../../models/movie.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie:any;
  movieRented: any;
    constructor(
      public dialogRef: MatDialogRef<MovieDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      ngOnInit(){
       
       this.movie=this.data; 
       console.log(JSON.stringify(this.movie))
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    alquilar(movie){
      
      this.dialogRef.close(movie)
      console.log("entra aqui")
    }
  
}
