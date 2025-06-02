import { Component, computed, effect, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { MovieCastCredit } from '../../core/models/film.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, filter, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-films-by-id',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './films-by-id.component.html',
  styleUrl: './films-by-id.component.css'
})
export class FilmsByIdComponent {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  private paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  actorID = computed(() => Number(this.paramMap().get('id') || NaN));
  actorMovies = signal<MovieCastCredit[]>([]);
  actorName = signal<string>('');


  constructor() {
    effect(() => {
      const id = this.actorID();
      if (!isNaN(id)) {
        this.filmService.getMovieByPerson(id).subscribe({
          next: (res) => this.actorMovies.set(res),
          error: () => this.actorMovies.set([])
        });
      }
    });
    const queryParams = inject(ActivatedRoute).snapshot.queryParamMap;
    this.actorName.set(queryParams.get('name') || 'Unknown');
  }
}
