import {Component, HostBinding, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

type CardColor = 'teal' | 'liliac';
type CardSize = 'full' | 'half';

export interface CardImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'sr-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  readonly color = input<CardColor>('teal');
  readonly size = input<CardSize>('full');
  readonly imageConfig = input<CardImage | undefined>();

  @HostBinding('class') get inputBasedClasses() { return this.color(); }

  // TODO decide if and how to do this
  @HostBinding('class.half-size') get sizeClass() { return this.size() === 'half'; }
}
