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
    { color: 'green', title: '-5,43%', subtitle: 'Consumo totale di energia (GJ)' },
    { color: 'mint', title: '-10.58%', subtitle: 'Emissioni da combustibili non rinnovabili (Tonnellate CO2)' },
    { color: 'skyblue', title: '110kW', subtitle: 'Capacità nuovi impianti' },
    { color: 'azure', title: '>200k', subtitle: 'Euro donati' },
    { color: 'lilac', title: '-14.58%', subtitle: 'Consumo diesel' },
    { color: 'purple', title: '+19.38%', subtitle: 'Donne assunte' },
  ];
  protected readonly companyItems: CardItems[] = [
    { color: 'hotpink', title: 'Robotics', subtitle: 'Progettazione, produzione e distribuzione robot' },
    { color: 'pink', title: 'Green Innovation', subtitle: 'Distribuisce soluzioni innovative per risparmio energetico' },
    { color: 'purple', title: 'Automation', subtitle: 'Sviluppo di sistemi di tracciabilità basata su RFID' },
    { color: 'lilac', title: 'Healthcare', subtitle: 'Sistemi informativi integrati per settore HC' },
    { color: 'azure', title: 'Software', subtitle: 'Progettazione di software cloud-based' },
  ];
}
