import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CastMember } from '../../../core/models/film.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) actor!: CastMember;
}
