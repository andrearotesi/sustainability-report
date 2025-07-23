import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './components/card/card';
import {Carousel} from './components/carousel/carousel';
import {Video} from './components/video/video';
import {Divider} from './components/divider/divider';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Card, Carousel, Video, Divider, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sustainability-report');
}
