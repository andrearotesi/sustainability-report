import { AfterViewInit, Component, ElementRef, input, signal, ViewChild } from '@angular/core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'sr-video',
  imports: [
    FaIconComponent
  ],
  templateUrl: './video.html',
  styleUrl: './video.scss'
})
export class Video implements AfterViewInit {
  @ViewChild('videoRef') videoRef!: ElementRef;

  src = input.required<string>();

  protected readonly isPlaying = signal<boolean>(true);
  protected readonly toggleIcon = signal<IconDefinition>(faPause);

  ngAfterViewInit(): void {
    this.videoRef.nativeElement.muted = true;
    this.videoRef.nativeElement.play();
  }

  toggleVideo(): void {
    if (this.isPlaying()) {
      this.videoRef.nativeElement.pause();
      this.toggleIcon.set(faPlay);
    } else {
      this.videoRef.nativeElement.play();
      this.toggleIcon.set(faPause);
    }
    this.isPlaying.set(!this.isPlaying());
  }
}
