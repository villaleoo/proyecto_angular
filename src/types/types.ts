export interface MovieDetail{
    adult:boolean, 
    backdrop_path:string,   
    genres:Array<Genres>,    
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
    belongs_to_collection: null,
    budget:number,
    homepage:string,
    production_companies:Array<CompanieMovie>,
    production_countries:Array<ProductingCountry>,
    revenue:number,
    runtime:number,
    spoken_languages:Array<Object>,
    status:string,
    tagline:string,
    isFav:boolean   
}
export interface Movie extends Omit<MovieDetail,
'genres'| 
'belongs_to_collection'|
'budget'|
'homepage'|
'production_companies'|
'production_countries'|
'revenue'|
'runtime'|
'spoken_languages'|
'status'|
'tagline'>{
    genre_ids:Array<number>,
}

export interface objectAPI{
    dates:object,
    page:number,
    results:Array<Movie>,
    total_pages:number,
    total_result:number
}
export interface Genres{
    id:number,
    name:string,
}
export interface CompanieMovie{
    id:number,
    logo_path:string,
    name:string,
    origin_country:string,
}
export interface ProductingCountry{
    iso_3166_1:string,
    name:string,
}




