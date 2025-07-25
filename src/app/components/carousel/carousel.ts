import { Component, ElementRef, ViewChild } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

enum ScrollDirectionEnum {
  Left = 'LEFT',
  Right = 'RIGHT'
}

interface ScrollAction {
  icon: IconDefinition;
  direction: ScrollDirectionEnum;
}

@Component({
  selector: 'sr-carousel',
  imports: [
    FaIconComponent
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  readonly scrollAction: ScrollAction[] = [
    { icon: faAngleLeft, direction: ScrollDirectionEnum.Left },
    { icon: faAngleRight, direction: ScrollDirectionEnum.Right },
  ];

  /**
   * Scrolls the carousel in the given direction by the carousel item width.
   */
  scrollItems(direction: ScrollDirectionEnum) {
    const container = this.scrollContainer.nativeElement;
    const item = container.querySelector('[carousel-item]');
    if (!item) return;

    const itemWidth = (item as HTMLElement).offsetWidth;
    container.scrollBy({
      left: direction === ScrollDirectionEnum.Right ? itemWidth : -itemWidth,
      behavior: 'smooth',
    });
  }
}
