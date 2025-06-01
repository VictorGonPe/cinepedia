import { Component, inject, computed } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-buttons',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './login-buttons.component.html',
  styleUrl: './login-buttons.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);

  readonly isLoggedIn = computed(() => this.authService.user() !== null);

  logout() {
    this.authService.logout().then(() => console.log('✅ Logout'));
  }
}
