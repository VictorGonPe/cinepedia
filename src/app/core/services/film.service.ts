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

  private _movies = toSignal(
    this.http.get<{ results: any[] }>(this.apiUrl),
    { initialValue: { results: [] } }
  );

  movies = computed(() => this._movies().results);
}