import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player'
import { World } from '../world';
import { FishingZone } from '../fishing-zone';

@Component({
  selector: 'app-fishing-zone',
  templateUrl: './fishing-zone.component.html',
  styleUrls: ['./fishing-zone.component.css']
})
export class FishingZoneComponent implements OnInit {

  public fishingZone: FishingZone;

  constructor(public player: Player, public world: World) {
    this.fishingZone = player.getFishingZone();
  }

  public changeFishingZone(fishingZoneName: string): void {
    this.player.setFishingZone(this.world.fishingZones.find(fishingZone => fishingZone.name == fishingZoneName));
    this.fishingZone = this.player.getFishingZone();
  }

  ngOnInit(): void {
  }

}