import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Movie, Credits, MovieCastCredit } from '../models/film.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class FilmService {
    private http = inject(HttpClient);

    getMoviesByPage(page: number) {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${environment.TMDB_API_KEY}`;
        return this.http.get<{ results: Movie[] }>(url);
    }

    getMovieById(movieId: number) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.TMDB_API_KEY}`;
        return this.http.get<Movie>(url);
    }

    getCreditsByMovieId(movieId: number) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${environment.TMDB_API_KEY}`;
        return this.http.get<Credits>(url);
    }

    getMovieByPerson(personId:number) {
        const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${environment.TMDB_API_KEY}`;
        return this.http
        .get<{ cast: MovieCastCredit[] }>(url)
        .pipe(map(resp => resp.cast));
    }
}
