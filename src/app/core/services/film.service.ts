import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environment';

@Injectable({
    providedIn: 'root'
})

export class FilmService {
    private http = inject(HttpClient);
    private apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.TMDB_API_KEY}`;

    private responseSignal = toSignal(
        this.http.get<{ results: any[] }>(this.apiUrl),
        { initialValue: { results: [] } }
    );
    rateMovies = computed(() => this.responseSignal().results);

    getCreditsByMovieId(movieId: number) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${environment.TMDB_API_KEY}`;
        return this.http.get<{ cast: any[], crew: any[] }>(url);
    }
}