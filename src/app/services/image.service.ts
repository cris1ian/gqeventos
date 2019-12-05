import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  uploadImage = (images: any, clientId: number) => {
    console.log(images);
    const body = new FormData().append('images', images);
    const params = new HttpParams().set('clientId', `${clientId}`);
    
    console.log(body);
    return this.httpClient.post(`${environment.WS_URL}/image`, images, { params });
  }

  deleteImage = (myImage: any, clientId: number) => {
    // const formData = new FormData();
    // formData.append('myImage', myImage);

    // return this.httpClient
    //   .post(`${environment.WS_URL}/user/image?userEmail=${clientId}`, formData)
  }

}
