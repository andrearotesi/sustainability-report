import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './components/card/card';
import {Carousel} from './components/carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sustainability-report');
}
