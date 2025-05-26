import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film.service';

@Component({
  selector: 'app-detail-film',
  imports: [],
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.css'
})

export class DetailFilmComponent {
  private filmService = inject(FilmService);
  dataDetail = this.filmService.getCreditsByMovieId; 
}
