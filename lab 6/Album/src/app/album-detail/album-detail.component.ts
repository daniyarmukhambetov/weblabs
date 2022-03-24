import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import {Location} from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album : Album = {
    id:0,
    user_Id : 0,
    title : "NoAlbum",
    body : "NoAlbum"
  };
  constructor(private service : AlbumsService,
    private route : ActivatedRoute,
    private location : Location,
    ) { }
  
  ngOnInit(): void {
    this.get_Album();
  }
  get_Album() {
    // console.log(1);
    
    this.route.paramMap.subscribe(params => {
      const id = +(params.get('id') || '0');
      this.service.get_Album(id).subscribe(album => {
        this.album = album;
        console.log(album);
      })
    })
  }
  return_back() {
    this.location.back();
  }
  save() {
    console.log(this.album);
    console.log("enter");
    this.service.save(this.album).subscribe(album => {
      console.log(album);
    })
    console.log("exit");
    
  }

}
