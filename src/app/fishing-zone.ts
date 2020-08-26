export class FishingZone {
    public fishTypes: Array<string> = new Array();
    public displayedName: string;
    public traversable: boolean;

    public constructor(public name: string) {

    }
}