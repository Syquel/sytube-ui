import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as shaka from "shaka-player/dist/shaka-player.ui";

@Component({
  selector: 'app-shaka-player',
  templateUrl: './shaka-player.component.html',
  styleUrls: ['./shaka-player.component.scss']
})
export class ShakaPlayerComponent implements AfterViewInit {

  @Input() videoUrl: string = '';

  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;

  videoElement: HTMLVideoElement | null = null;
  videoContainerElement: HTMLDivElement | null = null;
  player: shaka.Player | null = null;

  constructor() { }

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef!.nativeElement;
    this.videoContainerElement = this.videoContainerRef!.nativeElement;

    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    }
  }

  private initPlayer(): void {
    this.player = new shaka.Player(this.videoElement);

    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerElement!,
      this.videoElement!
    );

    this.player
      .load(this.videoUrl)
      .then(() => {
        this.videoElement?.play();
      })
      .catch((e: any) => {
        console.error(e);
      });
  }

}
