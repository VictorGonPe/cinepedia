import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = '';
  password = '';
  error = signal('');

  constructor(private auth: AuthService) { }

  onLogin() {
    this.auth.login(this.email, this.password)
      .then(() => console.log('Logeado!'))
      .catch(err => this.error.set(err.message));
  }
}
