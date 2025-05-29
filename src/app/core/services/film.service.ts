import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';
import { Movie, Credits } from '../models/film.model';

@Injectable({
    providedIn: 'root'
})

export class FilmService {
    private http = inject(HttpClient);
    // private apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${environment.TMDB_API_KEY}`

    // private responseSignal = toSignal(
    //     this.http.get<{ results: any[] }>(this.apiUrl),
    //     { initialValue: { results: [] } }
    // );
    // allMovies = computed(() => this.responseSignal().results);

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
}
