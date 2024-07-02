import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';
import { Movie } from '../../../types/types';

@Component({
  selector: 'app-list-fav-movies',
  templateUrl: './list-fav-movies.component.html',
  styleUrl: './list-fav-movies.component.scss'
})
export class ListFavMoviesComponent implements OnInit{

  favsList:Movie[]=[];

  constructor(private favsService: FavoriteMoviesService){
    favsService.favsList$.subscribe(m => this.favsList=m);
  }


  ngOnInit(): void {
    
  }

}
