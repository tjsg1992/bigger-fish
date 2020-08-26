import { Price } from './fish'

export class Upgrade {
    public purchased: boolean = true;
    public available: boolean = false;
    public affordable: boolean = false;
    constructor(public name: string, public description: string, public price: Price, public actions: Array<UpgradeAction>) {

    }
}

export class UpgradeAction {
    constructor(public type: string, public modifier: string, public power: number) {
        
    }
}