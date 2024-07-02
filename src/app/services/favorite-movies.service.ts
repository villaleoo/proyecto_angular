import { Injectable } from '@angular/core';
import { Movie } from '../../types/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService{
  //hasta 50 peliculas
  private favsList : Movie[] = this.getLocalStorageMovies();
  favsList$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.getLocalStorageMovies());

  constructor() { }

  
  add(movie:Movie){
    
    this.favsList.push(movie);
    this.favsList$.next(this.favsList);
    this.setItem('favMovies', [...this.favsList])

  }
  

  remove(movie:Movie){
    this.favsList = this.favsList.filter(m => m.id !== movie.id);
    this.favsList$.next(this.favsList);
    
    this.setItem('favMovies', [...this.favsList]);
  }

  update(event:Event, movie:Movie){
    const inputElement = event.target as HTMLInputElement;

    inputElement.checked ? this.add(movie) : this.remove(movie);
   
    
  }

  getLocalStorageMovies(): Movie[]{
    return this.getItem('favMovies') || [];
  }

 
  private setItem(key:string, value:Movie[]):void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getItem(key: string): any {
    const moviesFav = localStorage.getItem(key);
    return moviesFav ? JSON.parse(moviesFav) : null;
  }
  private clear(): void {
    localStorage.clear();
  }
}
