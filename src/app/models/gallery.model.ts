export interface GalleryItem {
  mobileImageSrc: string;
  desktopImageSrc: string;
  alt: string;
  title?: string;
  subtitle?: string;
  caption?: {
    title: string;
    body: string;
  }
}

export enum ScrollDirectionEnum {
  Left = 'LEFT',
  Right = 'RIGHT'
}
