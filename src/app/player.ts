import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { World } from './world'

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

        let canCatch = true;
        fish.prices.forEach(price => {
            let fishInInventory = this.fishInventory.get(price.costType);
            if (!fishInInventory || fishInInventory < price.costAmount) {
                canCatch = false;
            }
        })
        return canCatch;

    }

    public resolveCatch(): void {
        this.addToInventory(this.activeFish);
    }

    public canCatchActiveFish(): boolean {
        return this.canCatch(this.activeFish);
    }

    private purchase(fishType: string): void {
        let fish = this.world.getFish(fishType);
        if (!fish.prices || fish.prices.length == 0) {
            return;
        }

        fish.prices.forEach(price => {
            this.fishInventory.set(price.costType, this.fishInventory.get(price.costType) - price.costAmount);
        })
    }

    public purchaseActiveFish(): void {
        this.purchase(this.activeFish);
    }

    private addToInventory(fishType: string): void {
        if (!this.fishInventory.get(fishType)) {
            this.fishInventory.set(fishType, 0);
        }
        this.fishInventory.set(fishType, this.fishInventory.get(fishType) + 1);
    }
}

