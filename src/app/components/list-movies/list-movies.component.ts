import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../../../types/types';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';
import { MovieDataService } from '../../services/movie-data.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent implements OnInit{

  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  moviesSubscription: Subscription | undefined;

  constructor(
    private favsService: FavoriteMoviesService,
    private movieDB: MovieDataService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    
    this.moviesSubscription = this.movieDB.getAllLatest().subscribe(obj => {
      this.movies$.next(obj.results); // Actualiza movies$
    });
    
  }
  
  ngOnDestroy(): void {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
  
    
  handlerChange(event: Event, movie: Movie):void{
    this.cdr.markForCheck();
    this.favsService.update(event,movie);

  }

}
