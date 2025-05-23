import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmsComponent } from './views/films/films.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'films', component: FilmsComponent},
    {path: '**', component: NotFoundComponent}
];
