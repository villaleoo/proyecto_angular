import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie, MovieDetail, objectAPI } from '../../types/types';
import { FavoriteMoviesService } from './favorite-movies.service';


@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  private BASE_URL = 'https://api.themoviedb.org/3/movie';
  private BASE_LANGUAGE= 'language=es-LA'
  private API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGJkMWMwODVjM2IxNDNiNThmMzkyOTM3N2QxNGRlNyIsIm5iZiI6MTcxOTExNTg1Mi42NTM5MTgsInN1YiI6IjYyYWUxOTFlMDljMjRjMDA2MWE3ZmM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KCgREO4YRAdT5fOL1YXAvBKVnm55fpolQgYYBPGkWM4';
  private WIDTH_POSTER= 'w200';

  constructor(
    private http: HttpClient , 
    private favList:FavoriteMoviesService,
  ) { }

  public getAllLatest() {

    const url= `${this.BASE_URL}/now_playing?${this.BASE_LANGUAGE}&page=1`;
    const headers= new HttpHeaders().set('Authorization',`Bearer ${this.API_KEY}`);
    let moviesFav : Movie[]= this.favList.getLocalStorageMovies();

    if(moviesFav){
      return this.http.get<objectAPI>(url,{headers})
      .pipe(tap(obj => {
        obj.results.forEach(movie => {
          movie.isFav = moviesFav.some(fav => movie.id === fav.id);
          movie.poster_path=`https://image.tmdb.org/t/p/${this.WIDTH_POSTER}${movie.poster_path}`
        });
      }));
    }

    return this.http.get<objectAPI>(url,{headers})
      .pipe(tap(obj => {
        obj.results.forEach(movie => {
          movie.poster_path=`https://image.tmdb.org/t/p/${this.WIDTH_POSTER}${movie.poster_path}`
          movie.isFav = false;
        });
      })
    );
  }

  public getById(id:number){
    const url= `${this.BASE_URL}/${id}?${this.BASE_LANGUAGE}`
    const headers= new HttpHeaders().set('Authorization',`Bearer ${this.API_KEY}`);
    let moviesFav : Movie[]= this.favList.getLocalStorageMovies();

    return this.http.get<MovieDetail>(url,{headers})
    .pipe(
      tap(obj=>{ 
        obj.isFav = moviesFav.some(fav => obj.id === fav.id);
        obj.poster_path=`https://image.tmdb.org/t/p/${this.WIDTH_POSTER}${obj.poster_path}`; 
        obj.backdrop_path=`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`
      })
    )

  }

}
