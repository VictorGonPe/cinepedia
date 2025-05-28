import { Component, inject, computed } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { map, filter, catchError, of, switchMap } from 'rxjs';
import { Movie } from '../../core/models/film.model';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-detail-film',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.css'
})

export class DetailFilmComponent {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  //Extraer el ID como observable
  movieId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    filter(id => !isNaN(id))
  );

  //Llamar a la API y manejar errores
  credits$ = this.movieId$.pipe(
    switchMap(id => this.filmService.getCreditsByMovieId(id)),
    catchError(() => of({ cast: [], crew: [] }))
  );

  //Convertir Observable final a Signal
  credits = toSignal(this.credits$, {
    initialValue: { cast: [], crew: [] }
  });

  //Crear signals derivados
  cast = computed(() => this.credits().cast);
  crew = computed(() => this.credits().crew);


  //pedir imagen y titulo por el id

  private movieDetails$ = this.movieId$.pipe(
    switchMap(id => this.filmService.getMovieById(id)),
    catchError(() =>
      of({
        id: 0,
        title: 'Unknown',
        poster_path: '',
        vote_average: 0,
        overview: ''
      } satisfies Movie)
    )
  );

  movieDetails = toSignal(this.movieDetails$, {
    initialValue: {
      id: 0,
      title: '',
      poster_path: '',
      vote_average: 0,
      overview: ''
    }
  });
}
