import { Component } from '@angular/core';
import { Gallery } from './components/gallery/gallery';
import { Video } from './components/video/video';
import { Divider } from './components/divider/divider';
import { Footer } from './components/footer/footer';
import {
  COMPANY_GALLERY_ITEMS,
  PERFORMANCE_GALLERY_ITEMS
} from './constants/app.constants';

@Component({
  selector: 'app-root',
  imports: [Gallery, Video, Divider, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly reportYear = new Date().getFullYear() - 1;
  protected readonly reportItems = PERFORMANCE_GALLERY_ITEMS;
  protected readonly companyItems = COMPANY_GALLERY_ITEMS;
}
