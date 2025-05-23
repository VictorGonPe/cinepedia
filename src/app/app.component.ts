import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmSectionComponent } from './features/film-section/film-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, FilmSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinepedia';
}
