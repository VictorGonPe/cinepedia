import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../ui/logo/logo.component";

@Component({
  selector: 'app-header',
  imports: [RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectLink = 'home';

  selectMenu(link:string) {
    this.selectLink = link;
  }

}
