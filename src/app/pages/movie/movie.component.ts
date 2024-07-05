import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieDataService } from '../../services/movie-data.service';
import { Title } from '@angular/platform-browser';
import { MovieDetail } from '../../../types/types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit, OnDestroy{
  private id: number=-1;
  private maxID=99999999;

  movie: MovieDetail | null = null;

  constructor(
    private url:ActivatedRoute,
    private router:Router,
    private movieDB:MovieDataService,
    private titleService:Title
  ){
   
  }

  ngOnInit(): void {
    this.handleId();

    
    if(!this.id || this.id <= 0 || this.id > this.maxID){
      this.router.navigate(['/home']);
    }

    this.movieDB.getById(this.id).subscribe(obj => {
      setTimeout(()=>{
        this.movie=obj;                               //timeout utilizado solo para mejor vision de spinner
        this.titleService.setTitle(obj.title);
      },1000)
    });
    
  }

  ngOnDestroy(): void {
    
    
  }

  private handleId():void{
    this.url.paramMap.subscribe(params => {
      const _id = params.get('id');
      this.id = _id ? parseInt(_id, 10) : -1;
    });
  }
}
