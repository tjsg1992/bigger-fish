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
        let fish = this.world.getFish(fishType);
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
    {"type":"Minnow", "duration":1000, "price":null},
    {"type":"Guppie", "duration":10, "price":{"costType":"Minnow", "costAmount":2}},
    {"type":"Sardine", "duration":10, "price":null},
    {"type":"Sword Tail", "duration":10, "price":null},
    {"type":"Anchovy", "duration":10, "price":null},
    {"type":"Herring", "duration":10, "price":null},
    {"type":"Tiger Pleco", "duration":10, "price":null},
    {"type":"Mackerel", "duration":10, "price":null},
    {"type":"Catfish", "duration":10, "price":null},
    {"type":"Trout", "duration":10, "price":null},
    {"type":"Yellowtail", "duration":10, "price":null},
    {"type":"Cod", "duration":10, "price":null},
    {"type":"Tuna", "duration":10, "price":null},
    {"type":"Salmon", "duration":10, "price":null},
    {"type":"Snaper", "duration":10, "price":null},
    {"type":"Halibut", "duration":10, "price":null},
    {"type":"Swordfish", "duration":10, "price":null},
    {"type":"Shark", "duration":10, "price":null}
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