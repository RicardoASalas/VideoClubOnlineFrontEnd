import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  objeto = {};
  constructor(protected http: HttpClient) { }

  getMovies(): Observable<object> {

    return this.http.get('http://localhost:3001/movie/')
  }

  getMoviesByGenre(genre): Observable<object> {
    console.log("el titulo es " + genre)
    return this.http.get(`http://localhost:3001/movie/genre/${genre}`)
  }

  getMoviesByTitle(title): Observable<object> {
    console.log("el titulo es " + title)
    return this.http.get(`http://localhost:3001/movie/title/${title}`)
  }

}
