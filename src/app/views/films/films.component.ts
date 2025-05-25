import { Component } from '@angular/core';
import { FilmSectionComponent } from "../../features/film-section/film-section.component";

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [FilmSectionComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  constructor() {
    console.log('FilmsComponent loaded');
  }
}
