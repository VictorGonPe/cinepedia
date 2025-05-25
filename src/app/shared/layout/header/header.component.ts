import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../ui/logo/logo.component";
import { SocialComponent } from "../../ui/social/social.component";
import { LoginComponent } from "../../ui/login/login.component";

@Component({
  selector: 'app-header',
  imports: [RouterModule, LogoComponent, SocialComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectLink = 'home';

  selectMenu(link:string) {
    this.selectLink = link;
  }

  isMenuOpen:boolean = false;

  toogleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
