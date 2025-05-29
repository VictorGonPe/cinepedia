import { Component, inject, signal, HostListener } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { RouterModule } from '@angular/router';
import { Movie } from '../../core/models/film.model'; 

@Component({
  selector: 'app-film-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './film-section.component.html',
  styleUrl: './film-section.component.css'
})
export class FilmSectionComponent {
  private filmService = inject(FilmService);

  movies = signal<Movie[]>([]); 
  currentPage = signal(1);
  isLoading = false;

  constructor() {
    this.loadNextPage(); 
  }

  loadNextPage() {
    if (this.isLoading) return;
    this.isLoading = true;

    const page = this.currentPage();
    this.filmService.getMoviesByPage(page).subscribe(response => {
      this.movies.update(m => [...m, ...response.results]);
      this.currentPage.update(p => p + 1);
      this.isLoading = false;
    });
  }

  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight * 0.8) {
      this.loadNextPage();
    }
  }
}
