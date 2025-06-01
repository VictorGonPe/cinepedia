import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { LogoComponent } from "../../shared/ui/logo/logo.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent, LogoComponent],
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
      .then(() => window.location.href = '')
      .catch(err => {
        if (err.code === 'auth/invalid-credential') {
          this.error.set('⚠️ Incorrect email or password');
        } else {
          this.error.set(err.message); 
        }
      });
  }

}
