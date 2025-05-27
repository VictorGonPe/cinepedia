import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-film-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './film-section.component.html',
  styleUrl: './film-section.component.css'
})

export class FilmSectionComponent {
  private filmService = inject(FilmService);
  dataMovies = this.filmService.rateMovies;
}