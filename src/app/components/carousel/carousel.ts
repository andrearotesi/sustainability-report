import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'sr-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  @ViewChild('itemsContainer', { static: true })
  scrollContainer!: ElementRef<HTMLDivElement>;

  // TODO improve, rename etc...
  scrollByItem(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const item = container.querySelector('[carousel-item]');
    if (!item) return;

    const itemWidth = (item as HTMLElement).offsetWidth;
    container.scrollBy({
      left: direction === 'right' ? itemWidth : -itemWidth,
      behavior: 'smooth',
    });
  }
}
