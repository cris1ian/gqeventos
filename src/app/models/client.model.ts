export class Client {
    id?: number;
    hash: string = "";
    name: string = "";
    img01?: string;
    img02?: string;
    img03?: string;

    constructor(hash: string, name: string) {
        this.hash = hash;
        this.name = name;
    }
}