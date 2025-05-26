import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film.service';


@Component({
  selector: 'app-film-section',
  standalone: true,
  imports: [],
  templateUrl: './film-section.component.html',
  styleUrl: './film-section.component.css'
})

export class FilmSectionComponent {
  private filmService = inject(FilmService);
  dataMovies = this.filmService.rateMovies;
}