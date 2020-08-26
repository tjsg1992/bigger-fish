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

        upgrade.actions.forEach(action => {
            if (action.type == "Reduce Difficulty") {
                let fishType = action.modifier;
                this.world.getFish(fishType).difficulty -= action.power;
            }
    
            if (action.type == "Unhide Fish") {
                let fishType = action.modifier;
                if (fishType == "All") {
                    this.world.fish.forEach(fish => {
                        fish.hidden = false;
                    })
                } else {
                    this.world.getFish(fishType).hidden = false;
                }
            }        

            if (action.type == "Unlock Upgrade") {
                let upgrade = this.world.upgrades.find(upgrade => upgrade.name == action.modifier);
                upgrade.available = true;
            }

            if (action.type == "Change Yield") {
                let fishType = action.modifier;
                this.world.getFish(fishType).yield = action.power;
            }
        })

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

    public facilitateCatch(fishType: string) {
        this.player.resolveCatch(fishType);
        this.updateUpgrades();
        this.updateHiddenFish(fishType);
    }

    public updateUpgrades() {
        this.world.upgrades.forEach(upgrade => {
            upgrade.affordable = this.player.canAfford([upgrade.price]);
        })
    }

    public updateHiddenFish(caughtFishType: string) {
        this.world.fish.forEach(fish => {
            if (fish.prices) {
                fish.prices.forEach(price => {
                    if (price.costType == caughtFishType) {
                        fish.displayedName = fish.type;
                    }
                })
            }
        })
    }
}