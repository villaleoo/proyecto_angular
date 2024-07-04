import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';
import { Movie } from '../../../types/types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {

  movieList:Movie[]=[]

  constructor(
    private titleService:Title,
    private favsService:FavoriteMoviesService
  ){}

  ngOnInit(): void {
    this.titleService.setTitle("Favoritos | ngMovies");

    this.favsService.favsList$.subscribe(favs =>{
      this.movieList=[...favs].reverse();
    })
  }

  
}
