export class Fish {
    public price: Price;

    constructor(public type: string) {

    }
}

export class Price {
    constructor(public costType: string, public costAmount: number) {

    }
}