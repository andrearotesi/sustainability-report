import {Component, HostBinding, input} from '@angular/core';

type CardColor = 'teal' | 'liliac';
type CardSize = 'full' | 'half';

@Component({
  selector: 'sr-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  readonly color = input<CardColor>('teal');
  readonly size = input<CardSize>('full');

  @HostBinding('class') get inputBasedClasses() { return this.color(); }

  // TODO decide if and how to do this
  @HostBinding('class.half-size') get sizeClass() { return this.size() === 'half'; }
}
