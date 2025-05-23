import { Component, computed, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-film-section',
  standalone: true,
  imports: [],
  templateUrl: './film-section.component.html',
  styleUrl: './film-section.component.css'
})

export class FilmSectionComponent {
  private http = inject(HttpClient);
  private apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.TMDB_API_KEY}`;

  // Observable → Signal con toSignal()
  movies = toSignal(
    this.http.get<{ results: any[] }>(this.apiUrl),
    { initialValue: { results: [] } }
  );

  get results() {
    return this.movies().results;
  }
}