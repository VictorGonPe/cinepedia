import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { MovieCastCredit } from '../../core/models/film.model';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, filter, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-films-by-id',
  imports: [],
  templateUrl: './films-by-id.component.html',
  styleUrl: './films-by-id.component.css'
})
export class FilmsByIdComponent {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  private paramMap = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  actorID = computed(() => Number(this.paramMap().get('id') || NaN));
  films = signal<MovieCastCredit[]>([]);

  actorMovies = toSignal(
    this.filmService.getMovieByPerson(this.actorID()).pipe(
      catchError(() => of([]))
    ),
    { initialValue: [] }
  );

}
