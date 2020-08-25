import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { Fish } from './fish';

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
    {"type":"Guppie", "duration":1000, "prices":[
        {"costType":"Minnow", "costAmount":10}
    ]},
    {"type":"Sardine", "duration":1000, "prices":[
        {"costType":"Guppie", "costAmount":10}
    ]},
    {"type":"Sword Tail", "duration":1000, "prices":[
        {"costType":"Sardine", "costAmount":10}
    ]},
    {"type":"Anchovy", "duration":1000, "prices":[
        {"costType":"Sword Tail", "costAmount":10}
    ]},
    {"type":"Tiger Pleco", "duration":1000, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Herring", "duration":1000, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Mackerel", "duration":1000, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Catfish", "duration":1000, "prices":[
        {"costType":"Tiger Pleco", "costAmount":10}
    ]},
    {"type":"Trout", "duration":1000, "prices":[
        {"costType":"Herring", "costAmount":10}
    ]},
    {"type":"Yellowtail", "duration":1000, "prices":[
        {"costType":"Mackerel", "costAmount":10}
    ]},
    {"type":"Cod", "duration":1000, "prices":[
        {"costType":"Catfish", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Salmon", "duration":1000, "prices":[
        {"costType":"Yellowtail", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Snapper", "duration":1000, "prices":[
        {"costType":"Cod", "costAmount":10},
        {"costType":"Salmon", "costAmount":10}
    ]},
    {"type":"Halibut", "duration":1000, "prices":[
        {"costType":"Snapper", "costAmount":10}
    ]},
    {"type":"Tuna", "duration":1000, "prices":[
        {"costType":"Halibut", "costAmount":10}
    ]},
    {"type":"Shark", "duration":1000, "prices":[
        {"costType":"Tuna", "costAmount":10}
    ]}
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
        "Tiger Pleco",
        "Herring",
        "Catfish",
        "Yellowtail"
    ]},
    {"name":"Harbor", "fishTypes":[
        "Anchovy",
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