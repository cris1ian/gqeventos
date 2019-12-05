import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getGallery = () => {
    return this.httpClient.get(`${environment.WS_URL}/gallery`);
  }

  getPhoto = (id: number) => {
    let params = new HttpParams();
    params = params.append('id', `${id}`);
    return this.httpClient.get(`${environment.WS_URL}/photo`, { params });
  }

  createGallery = (client: Client) => {
    return this.httpClient.post(`${environment.WS_URL}/gallery`, client, this.appJsonHeader);
  }

  createPhoto = (photo: Photo) => {
    return this.httpClient.post(`${environment.WS_URL}/gallery`, photo, this.appJsonHeader);
  }

  deleteGallery = (id: number) => {
    let params = new HttpParams();
    params = params.append('id', `${id}`);
    return this.httpClient.delete(`${environment.WS_URL}/gallery`, { params });
  }

  deletePhoto = (id: number) => {
    let params = new HttpParams();
    params = params.append('id', `${id}`);
    return this.httpClient.delete(`${environment.WS_URL}/photo`, { params });
  }


  /**
   * Utilidades privadas de Auth
   */
  private appJsonHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


}
