import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-login-buttons',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-buttons.component.html',
  styleUrl: './login-buttons.component.css'
})
export class LoginComponent {

}
