import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { Fish, Price } from './fish';

@Injectable({
    providedIn: 'root'
  })
export class Player {
    public fishInventory: Map<string, number> = new Map();
    public currentFishingZone: FishingZone;
    public activeFish: string;

    constructor(public world: World) {
        
    }

    public canCatch(fishType: string): boolean {
        let fish = this.world.fish.find(fish => fish.type == fishType);
        if (!fish.price) {
            return true;
        }
        let priceFishType = fish.price.costType;
        return this.fishInventory.get(priceFishType) >= fish.price.costAmount;
    }

    public resolveCatch(): void {
        this.addToInventory(this.activeFish);
    }

    public canCatchActiveFish(): boolean {
        return this.canCatch(this.activeFish);
    }

    private purchase(fishType: string): void {
        let fish = this.world.fish.find(fish => fish.type == fishType);
        if (!fish.price) {
            return;
        }
        let priceFishType = fish.price.costType;
        this.fishInventory.set(priceFishType, this.fishInventory.get(priceFishType) - fish.price.costAmount);
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

@Injectable({
    providedIn: 'root'
})
export class World {
    public fishingZones: Array<FishingZone> = new Array();
    public fish: Array<Fish> = new Array();

    constructor() {
        let testFish1 = new Fish('TestFish1');
        let testFish2 = new Fish('TestFish2');
        testFish2.price = new Price('TestFish1', 2);
        this.fish.push(testFish1);
        this.fish.push(testFish2);

        let fishingZone1 = new FishingZone('FishingZone1');
        fishingZone1.fishTypes.push('TestFish1');
        fishingZone1.fishTypes.push('TestFish2');
        this.fishingZones.push(fishingZone1)

        let fishingZone2 = new FishingZone('FishingZone2');
        fishingZone2.fishTypes.push('TestFish3');
        fishingZone2.fishTypes.push('TestFish4');
        this.fishingZones.push(fishingZone2);
    }
}