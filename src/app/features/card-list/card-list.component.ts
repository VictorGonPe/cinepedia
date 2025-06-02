import { Component, computed, Input, signal } from '@angular/core';
import { CastMember } from '../../core/models/film.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  private actors = signal<CastMember[]>([]);

  @Input({ required: true }) 
    set cast(value: CastMember[]) {
    this.actors.set(value);
  }

  castSignal = computed(() => this.actors());
}
