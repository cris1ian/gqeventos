export class Photo {
    id?: number;
    userId?: number;
    isSelected?: boolean = false;
    fileName: string;
    picture: string | ArrayBuffer; 
}