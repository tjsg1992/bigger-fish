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
    player.fishInventory.set("TestFish1", 5);
    player.fishInventory.set("TestFish2", 3);
    player.currentFishingZone = world.fishingZones[0];
  }

}
