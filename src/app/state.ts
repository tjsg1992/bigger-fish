import { Injectable } from '@angular/core';
import { World } from './world'
import { Player} from './player'
import { Upgrade } from './upgrade'
import { Fish, Price } from './fish';

@Injectable({
    providedIn: 'root'
})
export class State {
    public automators: Array<Automator> = [];

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

            if (action.type == "Unhide Zone") {
                this.world.zonesAreRevealed = true;
            }     

            if (action.type == "Unlock Upgrade") {
                let upgrade = this.world.upgrades.find(upgrade => upgrade.name == action.modifier);
                upgrade.available = true;
            }

            if (action.type == "Change Yield") {
                let fishType = action.modifier;
                this.world.getFish(fishType).yield = action.power;
            }

            if (action.type == "Change Automation") {
                let fishType = action.modifier;
                let automator = this.automators.find(automator => automator.fishType == fishType);
                if (automator) {
                    automator.duration = action.power;
                    automator.stop();
                } else {
                    automator = new Automator(fishType, action.power, this);
                    this.automators.push(automator);
                }
                automator.start();
            }
        })
        this.updateHiddenUpgrade();
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
        this.updateHiddenZone(fishType);
        this.updateHiddenUpgrade();
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

    public updateHiddenZone(caughtFishType: string) {
        this.world.fishingZones.forEach(fishingZone => {
            if (!fishingZone.traversable) {
                if (fishingZone.unlockedBy == caughtFishType) {
                    fishingZone.traversable = true;
                    fishingZone.displayedName = fishingZone.name;
                }
            }
        })
    }

    public updateHiddenUpgrade() {
        this.world.upgrades.forEach(upgrade => {
            let fish = this.world.fish.find(fish => fish.type == upgrade.price.costType)
            if (fish && !fish.hidden) {
                upgrade.costTypeRevealed = true;
                upgrade.setCostDisplay();
            }
        })
    }
}

export class Automator {
    public running: boolean = false;
    public interval;
    
    constructor(public fishType: string, public duration: number, public state: State) {

    }

    public start() { 
        this.running = true;
        this.interval = setInterval(() => {
            this.state.facilitateCatch(this.fishType);
        }, this.duration)
    }

    public stop(): void {
        this.running = false;
        clearInterval(this.interval);
    }
}