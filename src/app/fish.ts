export class Fish {
    public price: Price;

    constructor(public type: string, public duration: number) {

    }
}

export class Price {
    constructor(public costType: string, public costAmount: number) {

    }
}