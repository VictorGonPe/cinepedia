import { Component, computed, effect, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { Movie } from '../../core/models/film.model';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-films-by-id',
  imports: [],
  templateUrl: './films-by-id.component.html',
  styleUrl: './films-by-id.component.css'
})
export class FilmsByIdComponent {
  private route = inject(ActivatedRoute);
  private fims = inject(FilmService);

  private paramMap = toSignal(this.route.paramMap, {initialValue: this.route.snapshot.paramMap});

  actorID = computed(() => Number(this.paramMap().get('id')|| NaN));

  films = signal

  constructor() {
    effect(() => {

    })
  }


}
