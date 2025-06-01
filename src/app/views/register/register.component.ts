import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string = '';
  password:string = '';
  error = signal('');

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.register(this.email, this.password)
      .then(() => console.log('Registrado!'))
      .catch(err => this.error.set(err.message));
  }

}
