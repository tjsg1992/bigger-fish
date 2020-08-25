import { Component } from '@angular/core';
import { Player } from './player'
import { World } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bigger Fish';

  constructor(public player: Player, public world: World) {
    player.setFishingZone(world.fishingZones[0]);
  }

}
