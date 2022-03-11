import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = ["Tabs and Notebooks", "Games", "Category 3", "Category 4"]
  state = new Map<String, boolean>(); 
  constructor() { 
    this.state.set("Category 1", false);
    this.state.set("Category 2", false);
    this.state.set("Category 3", false);
    this.state.set("Category 4", false);
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
