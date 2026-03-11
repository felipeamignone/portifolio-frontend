import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-colapse',
  imports: [NgClass],
  templateUrl: './card-colapse.html',
  styleUrl: './card-colapse.css',
})
export class CardColapse {
  title = input.required<string>();
  customClasses = input<string>('');

  isOpen = signal<boolean>(false);

  toggleOpen() {
    this.isOpen.update(isOpen => !isOpen);
  }
}
