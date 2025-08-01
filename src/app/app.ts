import { Component } from '@angular/core';
import {Card, CardColor} from './components/card/card';
import { Carousel } from './components/carousel/carousel';
import { Video } from './components/video/video';
import { Divider } from './components/divider/divider';
import { Footer } from './components/footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface CardItems {
  color: CardColor;
  title: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-root',
  imports: [Card, Carousel, Video, Divider, Footer, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly year = new Date().getFullYear();
  protected readonly reportItems: CardItems[] = [
    { image: 'images/energy.png', color: 'azure', title: '-5,43%', subtitle: 'Consumo totale di energia (GJ)' },
    { image: 'images/emissions.png', color: 'skyblue', title: '-10.58%', subtitle: 'Emissioni CO2' },
    { image: 'images/solar.png', color: 'mint', title: '110kW', subtitle: 'Capacità nuovi impianti' },
    { image: 'images/donations.png', color: 'pink', title: '>200k€', subtitle: 'In donazioni' },
    { image: 'images/diesel.png', color: 'lilac', title: '-14.58%', subtitle: 'Consumo diesel' },
    { image: 'images/women.png', color: 'azure', title: '+19.38%', subtitle: 'Lavoratrici assunte' },
  ];
  protected readonly companyItems: CardItems[] = [
    { image: 'images/test.png', color: 'hotpink', title: 'Robotics', subtitle: 'Progettazione, produzione e distribuzione robot' },
    { image: 'images/test.png', color: 'pink', title: 'Green Innovation', subtitle: 'Distribuisce soluzioni innovative per risparmio energetico' },
    { image: 'images/test.png', color: 'purple', title: 'Automation', subtitle: 'Sviluppo di sistemi di tracciabilità basata su RFID' },
    { image: 'images/test.png', color: 'lilac', title: 'Healthcare', subtitle: 'Sistemi informativi integrati per settore HC' },
    { image: 'images/test.png', color: 'azure', title: 'Software', subtitle: 'Progettazione di software cloud-based' },
  ];
}
