import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardComponent } from '../shared/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `users/${this.user.avatar}`
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
