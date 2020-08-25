import { Injectable } from '@angular/core';
import { World } from './world'
import { Player} from './player'
import { Upgrade } from './upgrade'

@Injectable({
    providedIn: 'root'
})
export class State {
    constructor(public world: World, public player: Player) {

    }

    public enactUpgrade(upgrade: Upgrade) {
        if (this.player.canAfford([upgrade.price])) {
            this.player.pay([upgrade.price]);
        } else {
            return;
        }

        if (upgrade.action.type == "ReduceDifficulty") {
            let fishType = upgrade.action.modifier;
            this.world.getFish(fishType).difficulty -= upgrade.action.power;
        }
    }
}