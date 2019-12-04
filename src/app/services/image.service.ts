import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  uploadImage = (myImage: any, clientId: number) => {
    const formData = new FormData();
    formData.append('myImage', myImage);

    return this.httpClient
      .post(`${environment.WS_URL}/user/image?userEmail=${clientId}`, formData)
  }

  deleteImage = (myImage: any, clientId: number) => {
    // const formData = new FormData();
    // formData.append('myImage', myImage);

    // return this.httpClient
    //   .post(`${environment.WS_URL}/user/image?userEmail=${clientId}`, formData)
  }

}
