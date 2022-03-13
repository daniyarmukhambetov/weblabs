import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = ["Tabs and Notebooks", "Games", "Health", "E-Books"]
  state = new Map<String, boolean>(); 
  cart : Product[] = []
  sum = 0
  constructor() { 
    this.state.set("Tabs and Notebooks", false);
    this.state.set("Games", false);
    this.state.set("Health", false);
    this.state.set("E-Books", false);
  }

  ngOnInit(): void {
  }
  show_products(category : String) : void {
    // console.log(category);
    
    if (this.state.get(category) == true) {
      this.state.set(category, false);
    } else {
      this.state.set(category, true);
    }
    // console.log(this.state.get(category));
  }
  delete (ind : number) {
    this.cart.splice(ind, 1);
    this.sum -= 50;
  }
  add(prod : Product) : void {
    this.cart.push(prod);
    this.sum += 50;
  } 

}
