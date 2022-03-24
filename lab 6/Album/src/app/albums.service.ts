import { Injectable } from '@angular/core';
import { Album } from './album';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  ROOT = 'https://jsonplaceholder.typicode.com'
  constructor(private client : HttpClient) { }
  get_Albums() : Observable<Album[]> {
    return this.client.get<Album[]>(`${this.ROOT}/albums`);
  }
  get_Album(id : number) : Observable<Album> {
    return this.client.get<Album>(`${this.ROOT}/albums/${id}`);
  }
  save(album : Album) {
    return this.client.put<Album>(`${this.ROOT}/albums/${album.id}`, album);
  }
  get_Photo(id : number) : Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.ROOT}/albums/${id}/photos`);
  }
  delete_album(id : number) {
    this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
}
