import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = ["Tabs and Notebooks", "Games", "Health", "E-Books"]
  state = new Map<String, boolean>(); 
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

}
