import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos !: Photo[];
  constructor(private service : AlbumsService,
    private route : ActivatedRoute,
    private location : Location,) { }
  ngOnInit(): void {
    this.get_Photos();
  }
  get_Photos() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = +(params.get('id') || 0);
      this.service.get_Photo(id).subscribe(photos => {
        this.photos = photos;
        console.log(id);
        
      })
    })
  }
  return_back() {
    this.location.back();
  }

}
