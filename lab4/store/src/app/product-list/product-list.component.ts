import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';
// import {PRODUCTS} from '../product-list.service'
// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[] = [];
  state = new Map<Number, boolean>(); 
  constructor(private service : ProductListService) {
    this.getProducts();
    for (let i = 0; i < this.products.length; i++) {
      this.state.set(this.products[i].id, false);
    }
  }
  onInit() : void {
  }
  getProducts():void {
    this.products = this.service.get_products();
  }
  show(id : Number) : void {
    // this.state.
    var s = this.state.get(id); 
    // console.log(s)
    if (s == true) {
      let btn = document.getElementById(`${id}`)?.getElementsByClassName("details-button")[0];
      // console.log(btn);
      if (btn) {
        btn.innerHTML = "Show details";
        // console.log(btn);
      }
      this.state.set(id, false);
    } else {
      let btn = document.getElementById(`${id}`)?.getElementsByClassName("details-button")[0];
      // console.log(btn);
      if (btn) {
          btn.innerHTML = "Hide details";
          // console.log(btn);
        }
      this.state.set(id, true);
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/