import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';
// import {PRODUCTS} from '../product-list.service'
// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];
  state = new Map<Number, boolean>(); 
  @Input() category !: String;
  constructor(private service : ProductListService) {
    // this.getProducts();
    // console.log(this.category);
    for (let i = 0; i < this.products.length; i++) {
      this.state.set(this.products[i].id, false);
    }
  }
  // ngO
  ngOnInit() : void {
    // console.log("onInit");
    // console.log(this.category);
    this.getProducts();
    console.log(this.products);
    
  }
  getProducts():void {
    this.products = this.service.get_products(this.category);
  }
  show(id : Number) : void {
    // this.state.
    console.log(this.category);
    var s = this.state.get(id);
    console.log(id); 
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