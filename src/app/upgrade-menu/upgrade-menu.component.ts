import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { Upgrade } from '../upgrade';
import { World } from '../world';

@Component({
  selector: 'app-upgrade-menu',
  templateUrl: './upgrade-menu.component.html',
  styleUrls: ['./upgrade-menu.component.css']
})
export class UpgradeMenuComponent implements OnInit {

  constructor(public state: State, public world: World) { }

  public buyUpgrade(upgrade: Upgrade) {
    this.state.enactUpgrade(upgrade);
  }

  ngOnInit(): void {
  }

}
