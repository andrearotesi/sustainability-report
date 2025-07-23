import { Component } from '@angular/core';
import {Card, CardImage} from './components/card/card';
import {Carousel} from './components/carousel/carousel';
import {Video} from './components/video/video';
import {Divider} from './components/divider/divider';
import {Footer} from './components/footer/footer';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [Card, Carousel, Video, Divider, Footer, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imageConfig: CardImage = {
    url: 'images/tree.png',
    alt: 'A random tree',
  };
}
