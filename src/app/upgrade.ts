import { Price } from './fish'

export class JSONUpgrade {
    constructor(public name: string, public description: string, public price: Price, public actions: Array<UpgradeAction>) {
    
    }
}

export class Upgrade {
    public name: string;
    public description: string;
    public price: Price;
    public actions: Array<UpgradeAction>;

    public purchased: boolean = false;
    public available: boolean = false;
    public affordable: boolean = false;
    public costTypeRevealed: boolean = false;
    public costDisplay: string;
    constructor(public jsonUpgrade: JSONUpgrade) {
        this.name = jsonUpgrade.name;
        this.description = jsonUpgrade.description;
        this.price = jsonUpgrade.price;
        this.actions = jsonUpgrade.actions;

        if (this.price.costType == 'Minnow') {
            this.costTypeRevealed = true;
            this.setCostDisplay();
        } else {
            this.setCostDisplay();
        }
    }

    public setCostDisplay() {
        let costType = this.price.costType;
        if (!this.costTypeRevealed) {
            costType = '???';
        }
        this.costDisplay = 'Costs ' + this.price.costAmount + ' ' + costType;
    }
}

export class UpgradeAction {
    constructor(public type: string, public modifier: string, public power: number) {
        
    }
}