import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface GalleryItem {
  mobileImageSrc: string;
  desktopImageSrc: string;
  alt: string;
  caption?: {
    title: string;
    body: string;
  }
}

export enum ScrollDirectionEnum {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export interface ScrollAction {
  icon: IconDefinition;
  direction: ScrollDirectionEnum;
}
