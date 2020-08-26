import { Injectable } from '@angular/core';
import { World } from './world'
import { Player} from './player'
import { Upgrade } from './upgrade'
import { Fish, Price } from './fish';

@Injectable({
    providedIn: 'root'
})
export class State {
    constructor(public world: World, public player: Player) {

    }

    public enactUpgrade(upgrade: Upgrade) {
        if (!this.player.canAfford([upgrade.price])) {
            return;
        }

        this.facilitatePayment([upgrade.price]);

        if (upgrade.action.type == "ReduceDifficulty") {
            let fishType = upgrade.action.modifier;
            this.world.getFish(fishType).difficulty -= upgrade.action.power;
        }

        upgrade.purchased = true;
    }

    public facilitatePurchase(fishType: string) {
        this.player.purchase(fishType);
        this.updateUpgrades();
    }

    public facilitatePayment(prices: Array<Price>) {
        this.player.pay(prices);
        this.updateUpgrades();
    }

    public facilitateCatch() {
        this.player.resolveCatch();
        this.updateUpgrades();
    }

    public updateUpgrades() {
        this.world.upgrades.forEach(upgrade => {
            upgrade.affordable = this.player.canAfford([upgrade.price]);
        })
    }
}