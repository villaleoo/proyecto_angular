import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ListFavMoviesComponent } from './components/list-fav-movies/list-fav-movies.component';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { InputCheckFavComponent } from './components/input-check-fav/input-check-fav.component';



@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    ListFavMoviesComponent,
    HomeComponent,
    FavoritesComponent,
    InputCheckFavComponent,
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
