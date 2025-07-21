import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'sr-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  @ViewChild('itemsContainer', { static: true }) itemsContainer!: ElementRef<HTMLDivElement>;

  /**
   * Scrolls the carousel in the given direction by the carousel item width.
   */
  scrollItems(direction: 'left' | 'right') {
    const container = this.itemsContainer.nativeElement;
    const item = container.querySelector('[carousel-item]');
    if (!item) return;

    const itemWidth = (item as HTMLElement).offsetWidth;
    container.scrollBy({
      left: direction === 'right' ? itemWidth : -itemWidth,
      behavior: 'smooth',
    });
  }
}
