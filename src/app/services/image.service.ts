import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

/* Utilidades privadas de Auth */
const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private httpClient: HttpClient) { }

    /* Este método es para un objeto en base64 */
    // uploadImage = (image: any, clientId: number) => {
    //     const params = new HttpParams().set('clientId', `${clientId}`);
    //     return this.httpClient.post(`${environment.WS_URL}/image`, image, { params });
    // }

    /* Este método es para un objeto tipo File */
    uploadImage = (image: any, clientId: number) => {
        const params = new HttpParams().set('clientId', `${clientId}`);
        const formData = new FormData();
        formData.append('image', image);

        return this.httpClient.post(`${environment.WS_URL}/image`, formData, { params });
    }

    deleteImage = (myImage: any, clientId: number) => {
        // const formData = new FormData();
        // formData.append('myImage', myImage);

        // return this.httpClient
        //   .post(`${environment.WS_URL}/user/image?userEmail=${clientId}`, formData)
    }

}
