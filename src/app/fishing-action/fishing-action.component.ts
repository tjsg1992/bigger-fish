import { Component, OnInit } from '@angular/core';
import { Player, World } from '../player';

@Component({
  selector: 'app-fishing-action',
  templateUrl: './fishing-action.component.html',
  styleUrls: ['./fishing-action.component.css']
})
export class FishingActionComponent implements OnInit {

  constructor(public player: Player, public world: World) { }

  ngOnInit(): void {
  }

  public changeActiveFish(fishType: string) {
    this.player.activeFish = fishType;
  }

}
