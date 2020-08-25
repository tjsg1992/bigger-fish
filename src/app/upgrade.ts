import { Price } from './fish'

export class Upgrade {
    public hidden: boolean = true;
    constructor(public name: string, public description: string, public price: Price, public action: UpgradeAction) {

    }
}

export class UpgradeAction {
    constructor(public type: string, public modifier: string, public power: number) {
        
    }
}