# ngMovies - ANGULAR 2024 
> Datos Alumno
- Leopoldo Villa
- Dni: 41211697.
- Email: villaleoo@hotmail.com
- Sede: Tandil.
- https://stackblitz.com/~/github.com/villaleoo/proyecto_angular

Buscador de peliculas, permite agregar peliculas a favoritos utilizando localStorage.

API utilizada: https://developer.themoviedb.org/reference/intro/getting-started

## Components 
    Contiene los componentes (parte visual) de la app

    - Navbar
    - Footer
    - Lista de peliculas (list-movies)
    - Vista detalle de pelicula (movie-detail)
    - Checkbox que agrega pelicula a favoritas (input-check-fav)

## Pages
    Contiene las secciones de la app

    - Home
    - Favoritos
    - Detalle de pelicula en particular (movie)

## Services
    Contiene componentes no visuales de la app

    - Servicio de agregar pelicula a favoritos
    - Servicio para obtener peliculas de la API 

## Routing
    Cuenta con rutas para acceder a las secciones
    
    /home 
    /pelicula/{id_pelicula}
    /favoritos

## LocalStorage
    Utilizado para persistir las peliculas favoritas y que puedan ser accedidas al moverse entre rutas.

    -El servicio de agregar peliculas a favoritos mantiene actualizado el LocalStorage