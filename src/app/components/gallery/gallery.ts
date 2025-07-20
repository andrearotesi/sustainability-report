import  {Component, ElementRef, input, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {GalleryItem, ScrollAction, ScrollDirectionEnum} from '../../models/gallery.model';

@Component({
  selector: 'sr-gallery',
  imports: [
    FaIconComponent
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  readonly items = input.required<GalleryItem[]>();

  readonly scrollActions: ScrollAction[] = [
    { icon: faAngleLeft, direction: ScrollDirectionEnum.Left },
    { icon: faAngleRight, direction: ScrollDirectionEnum.Right },
  ];

  /**
   * Scrolls the gallery in the given direction by the gallery item width.
   */
  scrollItems(direction: ScrollDirectionEnum) {
    const container = this.scrollContainer.nativeElement;
    const item = container.querySelector('.gallery-item-container');
    if (!item) return;

    const itemWidth = (item as HTMLElement).offsetWidth;
    container.scrollBy({
      left: direction === ScrollDirectionEnum.Right ? itemWidth : -itemWidth,
      behavior: 'smooth',
    });
  }
}
