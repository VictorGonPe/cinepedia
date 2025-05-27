import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmsComponent } from './views/films/films.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DetailFilmComponent } from './features/detail-film/detail-film.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'films', component: FilmsComponent},
    {path: 'films/:id', component: DetailFilmComponent},
    {path: '**', component: NotFoundComponent}
];
