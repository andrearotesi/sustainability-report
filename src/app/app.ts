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
  protected readonly year = new Date().getFullYear();
  protected readonly reportItems = [
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
  ];
  protected readonly companyItes = [
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
    { title: 'tit', subtitle: 'sub' },
  ];
}
