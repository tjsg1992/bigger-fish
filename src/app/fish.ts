export class Fish {
    public prices: Array<Price>;

    constructor(public type: string, public difficulty: number) {

    }
}

export class Price {
    constructor(public costType: string, public costAmount: number) {

    }
}