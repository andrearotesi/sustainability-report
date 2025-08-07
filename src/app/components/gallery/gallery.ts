import { AfterViewInit, Component, ElementRef, input, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { GalleryItem, ScrollDirectionEnum } from '../../models/gallery.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'sr-gallery',
  templateUrl: './gallery.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './gallery.scss'
})
export class Gallery implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('gallery', { static: true }) gallery!: ElementRef<HTMLDivElement>;

  readonly items = input.required<GalleryItem[]>();

  protected readonly ScrollDirectionEnum = ScrollDirectionEnum;

  private autoScrollIntervalId?: number;
  private scrollDirection: ScrollDirectionEnum = ScrollDirectionEnum.Right;

  canScrollLeft = signal<boolean>(false);
  canScrollRight = signal<boolean>(true);

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngAfterViewInit(): void {
    this.updateScrollButtons(); // Initial check
    this.gallery.nativeElement.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    this.gallery.nativeElement.removeEventListener('scroll', this.onScroll);
  }

  scrollItems(direction: ScrollDirectionEnum) {
    this.stopAutoScroll();
    this.performScroll(direction);
  }

  private onScroll = (): void => {
    this.stopAutoScroll();
    this.updateScrollButtons();
  };

  /**
   * Scrolls the gallery in the given direction by the gallery item width.
   */
  private performScroll(direction: ScrollDirectionEnum): void {
    const container = this.gallery.nativeElement;
    const item = container.querySelector('.gallery__item');
    if (!item) return;

    const itemWidth = (item as HTMLElement).offsetWidth;
    container.scrollBy({
      left: direction === ScrollDirectionEnum.Right ? itemWidth : -itemWidth,
      behavior: 'smooth',
    });
  }

  private updateScrollButtons(): void {
    const container = this.gallery.nativeElement;
    this.canScrollLeft.set(container.scrollLeft > 0);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight.set(container.scrollLeft < maxScrollLeft);
  }

  /**
   * Scrolls the items automatically every 10 seconds and reverses the scroll as soon as it gets to one end.
   */
  private startAutoScroll(): void {
    this.autoScrollIntervalId = setInterval(() => {
      const container = this.gallery.nativeElement;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (this.scrollDirection === ScrollDirectionEnum.Right && container.scrollLeft >= maxScrollLeft) {
        this.scrollDirection = ScrollDirectionEnum.Left;
      } else if (this.scrollDirection === ScrollDirectionEnum.Left && container.scrollLeft <= 0) {
        this.scrollDirection = ScrollDirectionEnum.Right;
      }

      this.performScroll(this.scrollDirection);
    }, 10000);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollIntervalId) {
      clearInterval(this.autoScrollIntervalId);
      this.autoScrollIntervalId = undefined;
    }
  }
}
