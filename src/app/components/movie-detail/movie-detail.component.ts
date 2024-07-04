import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieDataService } from '../../services/movie-data.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MovieDetail } from '../../../types/types';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';
import { Helper } from '../../utils/Helper';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  id: number=-1;
  maxID=99999999;
  movie:MovieDetail | null=null;
  movie$: BehaviorSubject<MovieDetail|null> = new BehaviorSubject<MovieDetail|null>(null);
  movieSubscription: Subscription | undefined;
  private helper:Helper;

  constructor(
    private url:ActivatedRoute,
    private router:Router,
    private movieDB:MovieDataService,
    private favsService: FavoriteMoviesService,
    private cdr: ChangeDetectorRef,
    private titleService:Title){
      this.helper=new Helper();
    }

  ngOnInit(): void {
    this.handleId();
   
    

    if(!this.id || this.id <= 0 || this.id > this.maxID){
      this.router.navigate(['/home']);
    }


    this.movieSubscription = this.movieDB.getById(this.id).subscribe(obj => {
      setTimeout(()=>{
        this.movie=obj;                               //timeout utilizado solo para mejor vision de spinner
        this.titleService.setTitle(obj.title);
        this.movie$.next(obj);
      },1000)
    });
     
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
    this.cdr.markForCheck();
    this.favsService.update(event,this.helper.parseMovieDetail(movie));
  }

  
  private handleId():void{
    this.url.paramMap.subscribe(params => {
      const _id = params.get('id');
      this.id = _id ? parseInt(_id, 10) : -1;
    });
  }
}
