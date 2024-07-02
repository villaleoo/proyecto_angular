export interface Movie{
    adult:boolean,
    backdrop_path:string,
    genre_ids:Array<number>,
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string,
    video:string,
    vote_average:number,
    vote_count:number,
    isFav:boolean
}

export interface objectAPI{
    dates:object,
    page:number,
    results:Array<Movie>,
    total_pages:number,
    total_result:number
}