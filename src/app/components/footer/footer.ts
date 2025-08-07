import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'sr-footer',
  imports: [
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  protected readonly year = new Date().getFullYear();
  protected readonly langOptions: string[] = ['it', 'en'];

  langControl = new FormControl<string | null>(null);

  private readonly translateService = inject(TranslateService);

  ngOnInit(): void {
    const currentLang = this.translateService.getCurrentLang();
    this.langControl.setValue(currentLang);

    this.langControl.valueChanges
      .pipe(filter(val => val !== null))
      .subscribe(val => this.translateService.use(val));
  }
}
