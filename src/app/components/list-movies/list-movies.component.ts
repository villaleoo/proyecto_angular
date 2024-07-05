import { Component, Input, OnInit,  } from '@angular/core';
import { Movie } from '../../../types/types';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent implements OnInit{

  @Input()
  movies:Movie[]=[];

  constructor(
    private favsService: FavoriteMoviesService,
  ){}

  ngOnInit(): void {
    
  }
  
  handlerChange(event: Event, movie: Movie):void{
    this.favsService.update(event,movie);
  }

}
