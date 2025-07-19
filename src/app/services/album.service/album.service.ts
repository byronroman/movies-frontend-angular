import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '@src/environments/environment';
import { MoviesModel } from '@src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  MICROSERVICE_URL: string = environment.MICROSERVICE_URL;
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http
      .get<MoviesModel[]>(this.MICROSERVICE_URL + 'movie')
      .pipe(map((res) => res));
  }

  saveMovie(movie: MoviesModel): Observable<any> {
    return this.http
      .post<MoviesModel[]>(this.MICROSERVICE_URL + 'movie', movie)
      .pipe(map((res) => res));
  }
  updateMovie(movie: MoviesModel): Observable<any> {
    return this.http
      .post<MoviesModel[]>(this.MICROSERVICE_URL + 'movie/update', movie)
      .pipe(map((res) => res));
  }
  deleteMovie(id: number): Observable<any> {
    return this.http
      .get<any>(this.MICROSERVICE_URL + 'movie/delete/' + id)
      .pipe(map((res) => res));
  }
}
