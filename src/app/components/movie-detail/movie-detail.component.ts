import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MovieDetail } from '../../../types/types';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';
import { Helper } from '../../utils/Helper';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit, OnDestroy{
  
  @Input()
  movie:MovieDetail | null=null;
 
  private helper:Helper;

  constructor(private favsService: FavoriteMoviesService){
      this.helper=new Helper();

  }

  ngOnInit(): void {

   
     
  }

  ngOnDestroy(): void {
    
  }
  
  truncateText(text: string, maxLength: number): string {
    if (!text || text.length <= maxLength) {
      return text;
    }
  
    const truncated = text.substring(0, maxLength);
    const lastComma = truncated.lastIndexOf(',');
    const lastPeriod = truncated.lastIndexOf('.');
  
    const truncatePosition = Math.max(lastComma, lastPeriod);
  
    if (truncatePosition > -1) {
      return text.substring(0, truncatePosition) + '...';
    }
  
    return truncated + '...';
  }

  getYearMovie(date:string):string{
    return date.substring(0,4)
  }

  parseBigNumber(num:number):string{
    let m=1000;
    if(num >= m){
      let n= num/m;

      return `${n.toFixed(1)}k`
    }
    return `${num.toFixed(0)}`;
  }

  parseSmallNumber(num:number):string{
    return num.toFixed(1);
  }

  handlerChange(event: Event, movie: MovieDetail):void{
    this.favsService.update(event,this.helper.parseMovieDetail(movie));
  }

}
