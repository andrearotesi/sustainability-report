import {Component, HostBinding, input} from '@angular/core';

export type CardColor = 'green' | 'mint' | 'skyblue' | 'azure' | 'lilac' | 'purple' | 'pink' | 'hotpink';

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
  readonly color = input<CardColor>('green');
  readonly imageConfig = input<CardImage | undefined>();

  @HostBinding('class') get inputBasedClasses() { return this.color(); }
}
