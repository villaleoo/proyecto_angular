import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { InputCheckFavComponent } from './components/input-check-fav/input-check-fav.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieComponent } from './pages/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    HomeComponent,
    FavoritesComponent,
    InputCheckFavComponent,
    MovieDetailComponent,
    MovieComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
