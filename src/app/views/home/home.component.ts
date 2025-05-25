import { Component } from '@angular/core';
import { FilmSectionComponent } from '../../features/film-section/film-section.component';
import { HeaderComponent } from '../../shared/layout/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmSectionComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
