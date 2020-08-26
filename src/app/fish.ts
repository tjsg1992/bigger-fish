export class Fish {
    public prices: Array<Price>;
    public hidden: boolean;
    public displayedName: string;
    public yield: number;

    constructor(public type: string, public difficulty: number) {

    }
}

export class Price {
    constructor(public costType: string, public costAmount: number) {

    }
}