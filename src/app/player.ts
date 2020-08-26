import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { World } from './world'
import { Price } from './fish'

@Injectable({
    providedIn: 'root'
  })
export class Player {
    public fishInventory: Map<string, number> = new Map();
    private fishingZone: FishingZone;
    public activeFish: string;

    constructor(public world: World) {
        
    }

    public setFishingZone(fishingZone: FishingZone) {
        this.fishingZone = fishingZone;
        this.activeFish = this.fishingZone.fishTypes[0];
    }

    public getFishingZone(): FishingZone {
        return this.fishingZone;
    }

    public canCatch(fishType: string): boolean {
        let fish = this.world.getFish(fishType);
        if (!fish.prices || fish.prices.length == 0) {
            return true;
        }

        return this.canAfford(fish.prices);
    }

    public canAfford(prices: Array<Price>): boolean {
        let canAfford = true;
        prices.forEach(price => {
            let fishInInventory = this.fishInventory.get(price.costType);
            if (!fishInInventory || fishInInventory < price.costAmount) {
                canAfford = false;
            }
        })
        return canAfford;
    }

    public resolveCatch(fishType: string): void {
        this.addToInventory(fishType);
    }

    public canCatchActiveFish(): boolean {
        return this.canCatch(this.activeFish);
    }

    public purchase(fishType: string): void {
        let fish = this.world.getFish(fishType);
        if (!fish.prices || fish.prices.length == 0) {
            return;
        }
        this.pay(fish.prices);
    }

    public pay(prices: Array<Price>) {
        prices.forEach(price => {
            this.fishInventory.set(price.costType, this.fishInventory.get(price.costType) - price.costAmount);
        })
    }

    private addToInventory(fishType: string): void {
        if (!this.fishInventory.get(fishType)) {
            this.fishInventory.set(fishType, 0);
        }
        this.fishInventory.set(fishType, this.fishInventory.get(fishType) + this.world.getFish(fishType).yield);
    }
}

