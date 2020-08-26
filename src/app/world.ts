import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { Fish } from './fish';
import { Upgrade } from './upgrade'

@Injectable({
    providedIn: 'root'
})
export class World {
    public fishingZones: Array<FishingZone> = fishingZones;
    public fish: Array<Fish> = fishTypes;
    public upgrades: Array<Upgrade> = upgrades;

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
    {"type":"Minnow", "difficulty":10, "hidden":false, "displayedName":"Minnow", "yield":1, "prices":null},
    {"type":"Guppie", "difficulty":20, "hidden":true, "displayedName":"Guppie", "yield":1, "prices":[
        {"costType":"Minnow", "costAmount":10}
    ]},
    {"type":"Sardine", "difficulty":30, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Guppie", "costAmount":10}
    ]},
    {"type":"Sword Tail", "difficulty":40, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Sardine", "costAmount":10}
    ]},
    {"type":"Anchovy", "difficulty":50, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Sword Tail", "costAmount":10}
    ]},
    {"type":"Tiger Pleco", "difficulty":60, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Herring", "difficulty":70, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Mackerel", "difficulty":80, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Catfish", "difficulty":90, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Tiger Pleco", "costAmount":10}
    ]},
    {"type":"Trout", "difficulty":100, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Herring", "costAmount":10}
    ]},
    {"type":"Yellowtail", "difficulty":110, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Mackerel", "costAmount":10}
    ]},
    {"type":"Cod", "difficulty":120, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Catfish", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Salmon", "difficulty":130, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Yellowtail", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Snapper", "difficulty":140, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Cod", "costAmount":10},
        {"costType":"Salmon", "costAmount":10}
    ]},
    {"type":"Halibut", "difficulty":150, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Snapper", "costAmount":10}
    ]},
    {"type":"Tuna", "difficulty":160, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Halibut", "costAmount":10}
    ]},
    {"type":"Shark", "difficulty":170, "hidden":true, "displayedName":"???", "yield":1, "prices":[
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

let upgrades: Array<Upgrade> = [
    {"name":"Buy Fish Hook", "description":"Reduces catch time for Minnows", "price":{"costType":"Minnow", "costAmount":1}, "purchased":false, "available":true, "affordable":false, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Buy Fishing Line", "power":NaN}
    ]},
    {"name":"Buy Fishing Line", "description":"Reduces catch time for Minnows", "price":{"costType":"Guppie", "costAmount":1}, "purchased":false,"available":false, "affordable":false, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Buy Sinker", "power":NaN}
    ]},
    {"name":"Buy Sinker", "description":"Reduces catch time for Minnows", "price":{"costType":"Guppie", "costAmount":1}, "purchased":false,"available":false, "affordable":false, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2}
    ]},
    {"name":"Find Fish Picture Book", "description":"Unlock the next fish", "price":{"costType":"Minnow", "costAmount":5}, "purchased":false,"available":true, "affordable":false, "actions":[
        {"type":"Unhide Fish", "modifier":"Guppie", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Buy Fish Dictionary", "power":NaN}
    ]},
    {"name":"Buy Fish Dictionary", "description":"Automatically unlocks the next available fish", "price":{"costType":"Minnow", "costAmount":10}, "purchased":false,"available":false, "affordable":false, "actions":[
        {"type":"Unhide Fish", "modifier":"Sardine", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Buy Fish Encyclopedia", "power":NaN}
    ]},
    {"name":"Buy Fish Encyclopedia", "description":"Reveal all fish and zones", "price":{"costType":"Minnow", "costAmount":10}, "purchased":false,"available":false, "affordable":false, "actions":[
        {"type":"Unhide Fish", "modifier":"All", "power":NaN},
        {"type":"Unhide Zone", "modifier":"All", "power":NaN}
    ]},
    {"name":"Buy Meal Worms", "description":"Catch 2 Minnows at a time", "price":{"costType":"Guppie", "costAmount":1}, "purchased":false,"available":true, "affordable":false, "actions":[
        {"type":"Change Yield", "modifier":"Minnow", "power":2}
    ]}
]