import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums : Album[] = [];
  constructor(private service : AlbumsService) { }
  ngOnInit(): void {
    this.get_Albums();
  }
  get_Albums() {
    this.service.get_Albums().subscribe(albums => {
      this.albums = albums;
    })
  }
  delete(album : Album) {
    this.service.delete_album(album.id);
    let alb = document.getElementById(String(album.id));
    alb?.remove();
  }
}
