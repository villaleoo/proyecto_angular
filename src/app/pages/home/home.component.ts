import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Movie } from '../../../types/types';
import { MovieDataService } from '../../services/movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  moviesList:Movie[]=[];
  moviesSubscription: Subscription | undefined;

  constructor(
    private movieDB: MovieDataService,
    private titleService:Title,
  ){}

  ngOnInit(): void {
    this.titleService.setTitle("Inicio | ngMovies");
    this.moviesSubscription = this.movieDB.getAllLatest().subscribe(obj => {
      setTimeout(()=>{
        this.moviesList=obj.results;                           //timeout utilizado solo para mejor vision de spinner
      }, 1000)
    });
    
  }

  ngOnDestroy(): void {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
  
}
