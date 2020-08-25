import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { Fish, Price } from './fish';
import { NONE_TYPE } from '@angular/compiler';

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
        console.log(canCatch);
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

@Injectable({
    providedIn: 'root'
})
export class World {
    public fishingZones: Array<FishingZone> = fishingZones;
    public fish: Array<Fish> = fishTypes;

    constructor() {

    }

    public getFish(fishType: string): Fish {
        return this.fish.find(fish => fish.type == fishType);
    }

    public getFishingZone(fishingZoneName: string): FishingZone {
        return this.fishingZones.find(fishingZone => fishingZone.name == fishingZoneName);
    }
}

let fishTypes: Array<Fish> = [
    {"type":"Minnow", "duration":1000, "prices":null},
    {"type":"Guppie", "duration":1000, "prices":[{"costType":"Minnow", "costAmount":2}]},
    {"type":"Sardine", "duration":1000, "prices":null},
    {"type":"Sword Tail", "duration":1000, "prices":null},
    {"type":"Anchovy", "duration":1000, "prices":null},
    {"type":"Herring", "duration":1000, "prices":null},
    {"type":"Tiger Pleco", "duration":1000, "prices":null},
    {"type":"Mackerel", "duration":1000, "prices":null},
    {"type":"Catfish", "duration":1000, "prices":null},
    {"type":"Trout", "duration":1000, "prices":null},
    {"type":"Yellowtail", "duration":1000, "prices":null},
    {"type":"Cod", "duration":1000, "prices":null},
    {"type":"Tuna", "duration":1000, "prices":null},
    {"type":"Salmon", "duration":1000, "prices":null},
    {"type":"Snaper", "duration":1000, "prices":null},
    {"type":"Halibut", "duration":1000, "prices":null},
    {"type":"Swordfish", "duration":1000, "prices":null},
    {"type":"Shark", "duration":1000, "prices":null}
]

let fishingZones: Array<FishingZone> = [
    {"name":"Pond", "fishTypes":[
        "Minnow",
        "Guppie",
        "Sardine",
        "Sword Tail",
        "Mackerel"
    ]},
    {"name":"River", "fishTypes":[
        "Anchovy",
        "Herring",
        "Catfish",
        "Yellowtail"
    ]},
    {"name":"Harbor", "fishTypes":[
        "Tiger Pleco",
        "Trout",
        "Cod",
        "Tuna"
    ]},
    {"name":"Deep Ocean", "fishTypes":[
        "Salmon",
        "Snapper",
        "Halibut",
        "Shark"
    ]}
]