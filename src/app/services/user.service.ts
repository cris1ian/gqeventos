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

  getGallery = (options?: {id?: number, hash?: string}) => {
    let params = new HttpParams();
    if (options['id'] != undefined) params = params.append('id', `${options['id']}`);
    if (options['hash'] != undefined) params = params.append('hash', `${options['hash']}`);
    return this.httpClient.get(`${environment.WS_URL}/gallery`, { params });
  }

  getPhoto = (userId: number) => {
    let params = new HttpParams();
    params = params.append('userId', `${userId}`);
    return this.httpClient.get(`${environment.WS_URL}/photo`, { params });
  }

  createGallery = (client: Client) => {
    return this.httpClient.post(`${environment.WS_URL}/gallery`, client, this.appJsonHeader);
  }

  createPhoto = (photo: Photo) => {
    return this.httpClient.post(`${environment.WS_URL}/gallery`, photo, this.appJsonHeader);
  }

  selectPhoto = (photoId: number, isSelected: boolean) => {
    let params = new HttpParams();
    params = params.append('id', `${photoId}`);
    params = params.append('isSelected', `${isSelected ? 1 : 0}`);
    return this.httpClient.put(`${environment.WS_URL}/photo`, {}, { params });
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
