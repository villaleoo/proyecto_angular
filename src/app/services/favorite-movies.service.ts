import { Injectable } from '@angular/core';
import { Movie } from '../../types/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService{
  private favsList : Movie[]  = this.getLocalStorageMovies();
  private isLocalStorage= typeof localStorage !== 'undefined';
  private LS_NAME='favMovies'; 

  favsList$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.favsList);

  constructor() { }

  add(movie:Movie){
    this.favsList.push(movie);
    this.favsList$.next(this.favsList);
    this.setItem(this.LS_NAME , [...this.favsList])

  }
  
  remove(movie:Movie){
    this.favsList = this.favsList.filter(m => m.id !== movie.id);
    this.favsList$.next(this.favsList);
    
    this.setItem(this.LS_NAME , [...this.favsList]);
  }

  update(event:Event, movie:Movie){
    const inputElement = event.target as HTMLInputElement;

    inputElement.checked ? this.add(movie) : this.remove(movie);
   
  }

  getLocalStorageMovies(): Movie[]{
    return this.getItem(this.LS_NAME ) || [];
  }

 
  private setItem(key:string, value:Movie[]):void {
    if (this.isLocalStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  private getItem(key: string): any {
    if(this.isLocalStorage){
      const moviesFav = localStorage.getItem(key);
      return moviesFav ? JSON.parse(moviesFav) : null;
    }
    return null;
  }

  private clear(): void {
    localStorage.clear();
  }

}
