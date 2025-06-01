import { Component, inject } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { LogoComponent } from "../../ui/logo/logo.component";
import { SocialComponent } from "../../ui/social/social.component";
import { LoginComponent } from "../../ui/login-buttons/login-buttons.component";
import { filter } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [RouterModule, LogoComponent, SocialComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router = inject(Router);

  selectLink = 'home';
  isMenuOpen: boolean = false;

  constructor() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;

        if (url === '/' || url === '') {
          this.selectLink = 'home';
        } else if (url.startsWith('/films')) {
          this.selectLink = 'films';
        }
      });
  }


  selectMenu(link: string) {
    this.selectLink = link;
  }

  toogleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
