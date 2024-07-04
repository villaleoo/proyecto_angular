import { Movie, MovieDetail } from "../../types/types";

export class Helper{

    public parseMovieDetail(movie:MovieDetail): Movie{
        const {genres,
              belongs_to_collection,
              budget,
              homepage,
              production_companies,
              production_countries,
              revenue,
              runtime,
              spoken_languages,
              status,
              tagline,
              ...newMovie
            }= movie;
    
        return {...newMovie, genre_ids:genres.map(i=> i.id)};
      }
}