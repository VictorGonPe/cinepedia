import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { LogoComponent } from "../../shared/ui/logo/logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, LogoComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  error = signal('');

  constructor(private auth: AuthService) { }

  onSubmit() {
    this.auth.register(this.email, this.password)
      .then(() => window.location.href = '')
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          this.error.set('⚠️ Este correo ya está registrado.');
        } else {
          this.error.set(err.message); 
        }
      });
  }

}
