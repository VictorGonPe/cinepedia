import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { RouterModule } from '@angular/router';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-film-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './film-section.component.html',
  styleUrl: './film-section.component.css'
})
export class FilmSectionComponent {
  private filmService = inject(FilmService);

  page = signal(1);

  private page$ = toObservable(this.page);

  private allMovies$ = this.page$.pipe(
    switchMap((page: number) => this.filmService.getMoviesByPage(page))
  );


  allMovies = toSignal(this.allMovies$, {
    initialValue: { results: [] }
  });

  dataMovies = computed(() => this.allMovies().results);

  nextPage() {
    this.page.update(p => p + 1);
  }

  prevPage() {
    this.page.update(p => (p > 1 ? p - 1 : 1));
  }
}
