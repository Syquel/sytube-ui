import {Component, Output} from '@angular/core';
import {BitrateOptions} from "@videogular/ngx-videogular/core";
import * as dashjs from "dashjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sytube-ui';

  currentStream: string = "http://localhost:8080/yoga.mpd";

  public logBitrates(bitRates: BitrateOptions[]): void {
    for (let bitRate in bitRates) {
      console.log("Bitrate: " + bitRate);
    }
  }

}
