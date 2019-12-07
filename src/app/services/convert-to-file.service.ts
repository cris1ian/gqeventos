import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConvertToFileService {

    constructor() { }

    convertToFile<File>(base64String: string, fileName: string, type: string) {
        base64String = base64String.substring(23);
        const byteString = window.atob(base64String);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) int8Array[i] = byteString.charCodeAt(i);
        const blob = new Blob([int8Array], { type: type });
        return new File([blob], fileName, { type: type });
    }


}
