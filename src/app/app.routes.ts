import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmsComponent } from './views/films/films.component';
import { DetailFilmComponent } from './features/detail-film/detail-film.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LayoutComponent } from './views/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
import { FilmsByIdComponent } from './features/films-by-id/films-by-id.component';


export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'films', component: FilmsComponent },
            // { path: 'films/:id', component: DetailFilmComponent, canActivate: [authGuard] },
            { path: 'films/:id', component: DetailFilmComponent },
            { path: 'actor/:id', component: FilmsByIdComponent }
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login' }
];
