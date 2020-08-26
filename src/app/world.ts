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
    {"type":"Minnow", "difficulty":10, "hidden":false, "displayedName":"Minnow", "prices":null},
    {"type":"Guppie", "difficulty":20, "hidden":true, "displayedName":"Guppie", "prices":[
        {"costType":"Minnow", "costAmount":10}
    ]},
    {"type":"Sardine", "difficulty":30, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Guppie", "costAmount":10}
    ]},
    {"type":"Sword Tail", "difficulty":40, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Sardine", "costAmount":10}
    ]},
    {"type":"Anchovy", "difficulty":50, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Sword Tail", "costAmount":10}
    ]},
    {"type":"Tiger Pleco", "difficulty":60, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Herring", "difficulty":70, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Mackerel", "difficulty":80, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Anchovy", "costAmount":10}
    ]},
    {"type":"Catfish", "difficulty":90, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Tiger Pleco", "costAmount":10}
    ]},
    {"type":"Trout", "difficulty":100, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Herring", "costAmount":10}
    ]},
    {"type":"Yellowtail", "difficulty":110, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Mackerel", "costAmount":10}
    ]},
    {"type":"Cod", "difficulty":120, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Catfish", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Salmon", "difficulty":130, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Yellowtail", "costAmount":10},
        {"costType":"Trout", "costAmount":10}
    ]},
    {"type":"Snapper", "difficulty":140, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Cod", "costAmount":10},
        {"costType":"Salmon", "costAmount":10}
    ]},
    {"type":"Halibut", "difficulty":150, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Snapper", "costAmount":10}
    ]},
    {"type":"Tuna", "difficulty":160, "hidden":true, "displayedName":"???", "prices":[
        {"costType":"Halibut", "costAmount":10}
    ]},
    {"type":"Shark", "difficulty":170, "hidden":true, "displayedName":"???", "prices":[
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
    {"name":"Buy Fish Hook", "description":"Reduces catch time for Minnows", "price":{"costType":"Minnow", "costAmount":1}, "purchased":false, "available":true, "affordable":false, "action":{
        "type":"ReduceDifficulty", "modifier":"Minnow", "power":2
    }},
    {"name":"Buy Fishing Line", "description":"Reduces catch time for Minnows", "price":{"costType":"Guppie", "costAmount":1}, "purchased":false,"available":false, "affordable":false, "action":{
        "type":"ReduceDifficulty", "modifier":"Minnow", "power":2
    }},
    {"name":"Buy Sinker", "description":"Reduces catch time for Minnows", "price":{"costType":"Guppie", "costAmount":1}, "purchased":false,"available":false, "affordable":false, "action":{
        "type":"ReduceDifficulty", "modifier":"Minnow", "power":2
    }},
    {"name":"Find Fish Picture Book", "description":"Learn more about fish", "price":{"costType":"Minnow", "costAmount":5}, "purchased":false,"available":true, "affordable":false, "action":{
        "type":"Unhide", "modifier":"Guppie", "power":NaN
    }},
    {"name":"Buy Fish Dictionary", "description":"Learn even more about fish", "price":{"costType":"Minnow", "costAmount":10}, "purchased":false,"available":false, "affordable":false, "action":{
        "type":"Unhide", "modifier":"Sardine", "power":NaN
    }}
]