import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';

@Injectable({
    providedIn: 'root'
  })
export class Player {
    public fishInventory: Map<string, number> = new Map();
    public currentFishingZone: FishingZone;

    public catch(fishType: string): void {
        this.fishInventory.set(fishType, this.fishInventory.get(fishType) + 1);
    }
}

@Injectable({
    providedIn: 'root'
})
export class World {
    public fishingZones: Array<FishingZone> = new Array();

    constructor() {
        let fishingZone1 = new FishingZone();
        fishingZone1.fishTypes.push('TestFish1');
        fishingZone1.fishTypes.push('TestFish2');
        this.fishingZones.push(fishingZone1)
    }
}