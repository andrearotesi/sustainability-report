import { AfterViewInit, Component, ElementRef, input, signal, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'sr-video',
  templateUrl: './video.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './video.scss'
})
export class Video implements AfterViewInit {
  @ViewChild('videoRef') videoRef!: ElementRef;

  src = input.required<string>();

  protected readonly isPlaying = signal<boolean>(true);
  protected readonly toggleIcon = signal<string>('pause');

  ngAfterViewInit(): void {
    this.videoRef.nativeElement.muted = true;
    this.videoRef.nativeElement.play();
  }

  toggleVideo(): void {
    if (this.isPlaying()) {
      this.videoRef.nativeElement.pause();
      this.toggleIcon.set('play_arrow');
    } else {
      this.videoRef.nativeElement.play();
      this.toggleIcon.set('pause');
    }
    this.isPlaying.set(!this.isPlaying());
  }
}
