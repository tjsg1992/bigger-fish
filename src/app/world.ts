import { Injectable } from '@angular/core';
import { FishingZone } from './fishing-zone';
import { Fish } from './fish';
import { Upgrade, JSONUpgrade } from './upgrade'

@Injectable({
    providedIn: 'root'
})
export class World {
    public fishingZones: Array<FishingZone> = fishingZones;
    public fish: Array<Fish> = fishTypes;
    public upgrades: Array<Upgrade> = upgrades;
    public zonesAreRevealed: boolean = false;

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
    {"type":"Tiger Pleco", "difficulty":50, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Sword Tail", "costAmount":10}
    ]},
    {"type":"Herring", "difficulty":60, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Tiger Pleco", "costAmount":10}
    ]},
    {"type":"Anchovy", "difficulty":70, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Herring", "costAmount":10}
    ]},
    {"type":"Mackerel", "difficulty":80, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Catfish", "difficulty":90, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Trout", "difficulty":100, "hidden":true, "displayedName":"???", "yield":1, "prices":[
        {"costType":"Anchovy", "costAmount":10}
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
    {"name":"Pond", "displayedName":"Pond", "traversable":true, "unlockedBy":null, "fishTypes":[
        "Minnow",
        "Guppie",
        "Sardine",
        "Sword Tail",
        "Mackerel"
    ]},
    {"name":"River", "displayedName":"???", "traversable":false, "unlockedBy":"Sword Tail", "fishTypes":[
        "Tiger Pleco",
        "Herring",
        "Catfish",
        "Yellowtail"
    ]},
    {"name":"Harbor", "displayedName":"???", "traversable":false, "unlockedBy":"Herring", "fishTypes":[
        "Anchovy",
        "Trout",
        "Cod",
        "Tuna"
    ]},
    {"name":"Deep Ocean", "displayedName":"???", "traversable":false, "unlockedBy":"Tuna", "fishTypes":[
        "Salmon",
        "Snapper",
        "Halibut",
        "Shark"
    ]}
]

let jsonUpgrades: Array<JSONUpgrade> = [
    {"name":"Fish Hook", "description":"Reduces catch time for Minnows", "price":{"costType":"Minnow", "costAmount":10}, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Fishing Line", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Fish Picture Book", "power":NaN}
    ]},
    {"name":"Fishing Line", "description":"Reduces catch time for Minnows", "price":{"costType":"Minnow", "costAmount":10}, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Sinker", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Better Bait", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Fishing Hook 2", "power":NaN}
    ]},
    {"name":"Fish Picture Book", "description":"Unlock the next fish", "price":{"costType":"Minnow", "costAmount":15}, "actions":[
        {"type":"Unhide Fish", "modifier":"Guppie", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Better Bait", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Fishing Hook 2", "power":NaN}
    ]},
    {"name":"Sinker", "description":"Reduces catch time for Minnows", "price":{"costType":"Guppie", "costAmount":1}, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Fish Dictionary", "power":NaN}
    ]},
    {"name":"Better Bait", "description":"Catch 2 Minnows at a time", "price":{"costType":"Guppie", "costAmount":2}, "actions":[
        {"type":"Change Yield", "modifier":"Minnow", "power":2},
        {"type":"Unlock Upgrade", "modifier":"Fish Dictionary", "power":NaN}
    ]},
    {"name":"Fishing Hook 2", "description":"Reduces catch time for Guppies", "price":{"costType":"Guppie", "costAmount":3}, "actions":[
        {"type":"Reduce Difficulty", "modifier":"Guppie", "power":3},
        {"type":"Unlock Upgrade", "modifier":"Fish Dictionary", "power":NaN}
    ]},
    {"name":"Fish Dictionary", "description":"Automatically unlocks the next available fish", "price":{"costType":"Guppie", "costAmount":3}, "actions":[
        {"type":"Unhide Fish", "modifier":"Sardine", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Minnow Net", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Fish Encyclopedia", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Better Minnows", "power":NaN},
        {"type":"Unlock Upgrade", "modifier":"Better Bait 2", "power":NaN}
    ]},
    {"name":"Better Bait 2", "description":"Catch 4 Minnows at a time", "price":{"costType":"Guppie", "costAmount":4}, "actions":[
        {"type":"Change Yield", "modifier":"Minnow", "power":4},
        {"type":"Unlock Upgrade", "modifier":"Fish Dictionary", "power":NaN}
    ]},
    {"name":"Minnow Net", "description":"Catch Minnows Automatically", "price":{"costType":"Sardine", "costAmount":1}, "actions":[
        {"type":"Change Automation", "modifier":"Minnow", "power":1000}
    ]},
    {"name":"Fish Encyclopedia", "description":"Reveal all fish and zones", "price":{"costType":"Sardine", "costAmount":1}, "actions":[
        {"type":"Unhide Fish", "modifier":"All", "power":NaN},
        {"type":"Unhide Zone", "modifier":"All", "power":NaN}
    ]},
    {"name":"Better Minnows", "description":"Catch 2 Guppies at a time", "price":{"costType":"Sardine", "costAmount":1}, "actions":[
        {"type":"Change Yield", "modifier":"Guppie", "power":2}
    ]},
    {"name":"Guppie Net", "description":"Catch Guppies Automatically", "price":{"costType":"Sardine", "costAmount":2}, "actions":[
        {"type":"Change Automation", "modifier":"Guppie", "power":1000}
    ]}
]

let upgrades: Array<Upgrade> = [];
jsonUpgrades.forEach(jsonUpgrade => {
    upgrades.push(new Upgrade(jsonUpgrade));
})

upgrades.find(upgrade => {
    if (upgrade.name == "Fish Hook") {
        upgrade.available = true;
    }
})