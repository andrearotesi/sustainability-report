import { Component } from '@angular/core';
import {Card, CardColor} from './components/card/card';
import { Carousel } from './components/carousel/carousel';
import { Video } from './components/video/video';
import { Divider } from './components/divider/divider';
import { Footer } from './components/footer/footer';
import {FontAwesomeModule, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faRobot, faLeaf, faGears} from '@fortawesome/free-solid-svg-icons';

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
  protected readonly companyItems: { icon: IconDefinition; title: string, subtitle: string }[] = [
    { icon: faRobot, title: 'Robotics', subtitle: 'Dal 2000, la divisione Robotics sviluppa soluzioni avanzate per semplificare la vita delle persone, riducendo l’impatto ambientale e promuovendo uno stile di vita efficiente. Unendo meccatronica, intelligenza artificiale e design sostenibile, mette l’innovazione al servizio dell’uomo e del pianeta.\n' },
    { icon: faLeaf, title: 'Green Innovation', subtitle: 'Fondata nel 2017, la divisione promuove l’indipendenza energetica e la sostenibilità in ambito residenziale, commerciale e industriale. Con soluzioni intelligenti, aiuta a ridurre i consumi, migliorare l’efficienza e accelerare la transizione energetica.' },
    { icon: faGears, title: 'Automation', subtitle: 'La divisione Automation offre soluzioni intelligenti per la tracciabilità e l’automazione dei processi, migliorando efficienza, sicurezza e sostenibilità in ambito industriale, sanitario e ambientale.' },
  ];
}
