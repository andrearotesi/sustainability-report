import {Component, ElementRef, input, signal, ViewChild} from '@angular/core';

@Component({
  selector: 'sr-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss'
})
export class Video {
  @ViewChild('videoRef') videoRef!: ElementRef;

  url = input.required<string>();

  protected readonly isPlaying = signal<boolean>(true);

  toggleVideo(): void {
    if (this.isPlaying()) {
      this.videoRef.nativeElement.pause();
    } else {
      this.videoRef.nativeElement.play();
    }
    this.isPlaying.set(!this.isPlaying());
  }
}
