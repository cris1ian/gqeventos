import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Photo } from '../models/photo.model';

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

    deleteImage = (image: Photo) => {
        let params = new HttpParams();
        params = params.append('userId', `${image.userId}`);
        params = params.append('fileName', `${image.fileName}`);
        return this.httpClient.delete(`${environment.WS_URL}/image`, { params });
    }

    deleteFolder = (userId: number) => {
        let params = new HttpParams();
        params = params.append('userId', `${userId}`);
        return this.httpClient.delete(`${environment.WS_URL}/imageFolder`, { params });
    }

}
