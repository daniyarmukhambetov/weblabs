import { Component, OnInit, Input } from '@angular/core';
import { ProductItemService } from '../product-item.service';
import { Product } from '../product';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SimpleChanges } from '@angular/core';

const PRODUCTS : Product[] = [
  { id:1, name:"ASUS Laptop L210 11.6", description:`Ultra Thin, 
    Intel Celeron N4020 Processor, 4GB RAM, 
    64GB eMMC Storage, 
    Windows 10 Home in S Mode with One Year of Office 365 Personal, 
    L210MA-DB02,Star Black`, 
    imgs : ["https://m.media-amazon.com/images/I/81cC7+BLJPL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/81dCQaPfYJL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81vHCd3INUL._AC_SX466_.jpg"
    ],
    rating:4
  },
  { id:2, name:"HP Chromebook 11-inch Laptop", description:` MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS™ - (11a-na0010nr, 2020 Model)`, 
    imgs : ["https://m.media-amazon.com/images/I/416a65jmqrL._AC_US40_.jpg", 
    "https://m.media-amazon.com/images/I/81lceOwkk+L._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81F79P-AYzL._AC_SX466_.jpg"
    ],
    rating:4.5
  },
  { id:3, name:"Lenovo Chromebook S330 Laptop", description:`14-Inch FHD Display, MediaTek MT8173C, 4GB RAM, 64GB Storage, Chrome OS`, 
    imgs : ["https://m.media-amazon.com/images/I/61mIka7zQGL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/7138qo2IHLL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71VchaKZShL._AC_SX679_.jpg"
    ],
    rating:4.3
  },
  { id:4, name:"MSI GL66 Gaming Laptop: 15.6", description:`144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD, Win10, Black (11UGK-001)`, 
    imgs : ["https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/61OszLrNOTS._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61WdRYCqflS._AC_SX466_.jpg"
    ],
    rating:4.5
  },
  { id:5, name:"HP 14 Laptop", description:`AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD Storage, 14-inch Full HD Display, Windows 11 Home, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life (14-fq1025nr, 2021), 
    Windows 10 Home in S Mode with One Year of Office 365 Personal, 
    L210MA-DB02,Star Black`, 
    imgs : ["https://m.media-amazon.com/images/I/71IOwQhjZNL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/81ZLnJ2911L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71eOhrxPAkL._AC_SX679_.jpg"
    ],
    rating:4.5
  },
  { id:6, name:"CYBERPOWERPC Gamer Xtreme VR Gaming PC", description:`Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)`, 
    imgs : ["https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/81HptOONtuL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81giVj9a6PL._AC_SX466_.jpg"
    ],
    rating:4.6
  },
  { id:7, name:"Acer Predator Helios 300 PH315-54-760S Gaming Laptop", description:`Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard`, 
    imgs : ["https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/71LFzxRRZqL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81fiOCDdLtL._AC_SX466_.jpg"
    ],
    rating:4.6
  },
  { id:8, name:"Tablet 10", description:`Android 11 Cellular 4G LTE Tablet PC 2 Sim Slot, 4GB RAM 128GB Storage, Google Certified Octa-Core Tablet with Keyboard Pen Case 13+5 MP Camera,Phone Call,Bluetooth WiFi GPS Video`, 
    imgs : ["https://m.media-amazon.com/images/I/71QSV2AmJKL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/712cTnMApXL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/71e2jFHGhuL._AC_SX466_.jpg"
    ],
    rating:4
  },
  { id:9, name:"HP Pavilion 15 Laptop", description:`11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS Micro-Edge Display, Windows 11 Pro, Compact Design, Long Battery Life (15-eg0025nr, 2021)`, 
    imgs : ["https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/713nL7Wt7VL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71P1GRd2sbL._AC_SX679_.jpg"
    ],
    rating:4.5
  },
  { id:10, name:"Lenovo Legion 5 Gaming Laptop", description:`5.6" FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 11 Home, Phantom Blue`, 
    imgs : ["https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/81V0JNUurbL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/81f0+HWV9fL._AC_SX679_.jpg"
    ],
    rating:4.6
  }, 
];
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // idd : Number = 0;
  @Input() idd !: Number;
  product : any;
  img_num = 0;
  constructor(private service:ProductItemService) { 
  }
  getProduct():void {
    this.product = this.service.getProduct(this.idd);
  }
  prev(id : Number) {
    let img = document.getElementById(`${id}_img`);
    this.img_num -= 1;
    this.img_num += 3;
    this.img_num %= 3;
    img?.setAttribute('src', this.product.imgs[this.img_num]);
  }
  next(id : Number) {
    let img = document.getElementById(`${id}_img`);
    this.img_num += 1;
    this.img_num += 3;
    this.img_num %= 3;
    img?.setAttribute('src', this.product.imgs[this.img_num]);
  }
  ngOnInit(): void {
    this.getProduct();
    console.log(this.idd);
  }

}
