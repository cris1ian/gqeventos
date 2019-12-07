export class Photo {
    id?: number;
    userId: number;
    isSelected?: boolean = false;
    fileName: string;

    constructor(userId: number, fileName: string) {
        this.userId = userId;
        this.fileName = fileName;
    }

}