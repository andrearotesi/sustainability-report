import { Component } from '@angular/core';

@Component({
  selector: 'sr-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
