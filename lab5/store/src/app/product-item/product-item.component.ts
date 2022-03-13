import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductItemService } from '../product-item.service';
import { Product } from '../product';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SimpleChanges } from '@angular/core';

var PRODUCTS : Product[] = [
  { id:1, name:"ASUS Laptop L210 11.6", description:`Ultra Thin, 
    Intel Celeron N4020 Processor, 4GB RAM, 
    64GB eMMC Storage, 
    Windows 10 Home in S Mode with One Year of Office 365 Personal, 
    L210MA-DB02,Star Black`, 
    imgs : ["https://m.media-amazon.com/images/I/81cC7+BLJPL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/81dCQaPfYJL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81vHCd3INUL._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4
  },
  { id:2, name:"HP Chromebook 11-inch Laptop", description:` MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS™ - (11a-na0010nr, 2020 Model)`, 
    imgs : ["https://m.media-amazon.com/images/I/416a65jmqrL._AC_US40_.jpg", 
    "https://m.media-amazon.com/images/I/81lceOwkk+L._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81F79P-AYzL._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.5
  },
  { id:3, name:"Lenovo Chromebook S330 Laptop", description:`14-Inch FHD Display, MediaTek MT8173C, 4GB RAM, 64GB Storage, Chrome OS`, 
    imgs : ["https://m.media-amazon.com/images/I/61mIka7zQGL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/7138qo2IHLL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71VchaKZShL._AC_SX679_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.3
  },
  { id:4, name:"MSI GL66 Gaming Laptop: 15.6", description:`144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD, Win10, Black (11UGK-001)`, 
    imgs : ["https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/61OszLrNOTS._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61WdRYCqflS._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.5
  },
  { id:5, name:"HP 14 Laptop", description:`AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD Storage, 14-inch Full HD Display, Windows 11 Home, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life (14-fq1025nr, 2021), 
    Windows 10 Home in S Mode with One Year of Office 365 Personal, 
    L210MA-DB02,Star Black`, 
    imgs : ["https://m.media-amazon.com/images/I/71IOwQhjZNL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/81ZLnJ2911L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71eOhrxPAkL._AC_SX679_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.5
  },
  { id:6, name:"CYBERPOWERPC Gamer Xtreme VR Gaming PC", description:`Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)`, 
    imgs : ["https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/81HptOONtuL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81giVj9a6PL._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.6
  },
  { id:7, name:"Acer Predator Helios 300 PH315-54-760S Gaming Laptop", description:`Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard`, 
    imgs : ["https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/71LFzxRRZqL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81fiOCDdLtL._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.6
  },
  { id:8, name:"Tablet 10", description:`Android 11 Cellular 4G LTE Tablet PC 2 Sim Slot, 4GB RAM 128GB Storage, Google Certified Octa-Core Tablet with Keyboard Pen Case 13+5 MP Camera,Phone Call,Bluetooth WiFi GPS Video`, 
    imgs : ["https://m.media-amazon.com/images/I/71QSV2AmJKL._AC_SX466_.jpg", 
    "https://m.media-amazon.com/images/I/712cTnMApXL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/71e2jFHGhuL._AC_SX466_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4
  },
  { id:9, name:"HP Pavilion 15 Laptop", description:`11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS Micro-Edge Display, Windows 11 Pro, Compact Design, Long Battery Life (15-eg0025nr, 2021)`, 
    imgs : ["https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/713nL7Wt7VL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71P1GRd2sbL._AC_SX679_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.5
  },
  { id:10, name:"Lenovo Legion 5 Gaming Laptop", description:`5.6" FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 11 Home, Phantom Blue`, 
    imgs : ["https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/81V0JNUurbL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/81f0+HWV9fL._AC_SX679_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.6
  },
  { id:11, name:"Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB", description:`
  Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display
All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library
Immersive Entertainment - Get the best seat in the house to live concerts, groundbreaking films, exclusive events and more
Easy Setup - Just open the box, set up with the smartphone app and jump into VR. No PC or console needed. Requires wireless internet access and the Oculus app (free download) to set up device
Premium Display - Catch every detail with a stunning display that features 50% more pixels than the original Quest
Ultimate Control - Redesigned Oculus Touch controllers transport your movements directly into VR with intuitive controls
PC VR Compatible - Step into incredible Oculus Rift titles by connecting an Oculus Link cable to a compatible gaming PC. Oculus Link Cable sold separately
3D Cinematic Sound - Hear in all directions with built-in speakers that deliver cinematic 3D positional audio
  `, 
    imgs : ["https://m.media-amazon.com/images/I/615YaAiA-ML._SX522_.jpg", 
    "https://m.media-amazon.com/images/I/71IdqIdug2L._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81-++CoFIXL._SX522_.jpg"
    ],
    category:"Games",
    rating:4.8
  },
  { id:12, name:"Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB", description:`
  Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display
  All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library
  Immersive Entertainment - Get the best seat in the house to live concerts, groundbreaking films, exclusive events and more
  Easy Setup - Just open the box, set up with the smartphone app and jump into VR. No PC or console needed. Requires wireless internet access and the Oculus app (free download) to set up device
  Premium Display - Catch every detail with a stunning display that features 50% more pixels than the original Quest
  Ultimate Control - Redesigned Oculus Touch controllers transport your movements directly into VR with intuitive controls
  PC VR Compatible - Step into incredible Oculus Rift titles by connecting an Oculus Link cable to a compatible gaming PC. Oculus Link Cable sold separately
  3D Cinematic Sound - Hear in all directions with built-in speakers that deliver cinematic 3D positional audio
  `, 
  imgs : ["https://m.media-amazon.com/images/I/615YaAiA-ML._SX522_.jpg", 
  "https://m.media-amazon.com/images/I/71IdqIdug2L._SX522_.jpg",
  "https://m.media-amazon.com/images/I/81-++CoFIXL._SX522_.jpg"
  ],
    category:"Games",
    rating:4.8
  },
  { id:13, name:"Xbox Core Wireless Controller – Carbon Black", description:`
  Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours.
  Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case. Plug in any compatible headset with the 3.5mm audio headset jack.
  Connect using the USB-C port for direct plug and play to console or PC. Support for AA batteries is included on the rear.
  Seamlessly capture and share content with the Share button.
  Use Xbox Wireless or Bluetooth to play across Xbox Series X|S, Xbox One, and Windows 10/11 devices.
  Compatible with Xbox Series X|S, Xbox One, and Windows 10/11 devices.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/61z3GQgEPZL._SX522_.jpg", 
    "https://m.media-amazon.com/images/I/61Hmlndg4UL._SX522_.jpgs",
    "https://m.media-amazon.com/images/I/81f0+HWV9fL._AC_SX679_.jpg"
    ],
    category:"Tabs and Notebooks",
    rating:4.6
  },
  { id:14, name:"SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN", description:`
  Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems
  Spend less time waiting and more time playing with read speeds up to 100 MB/s and write speeds up to 90MB/s
  Instantly add up to 128GB (1GB=1,000,000,000 bytes. Actual user storage less.)
  Store your downloaded games, screenshots and video captures in 1 place so you can travel light.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61DzVD49AfL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71IuUD6X7mL._AC_SX679_.jpg"
    ],
    category:"Games",
    rating:4.9
  },
  { id:15, name:"Xbox Series S", description:`
  Access your favorite entertainment through apps like YouTube, Netflix, and more
  Enjoy over 100 games right out of the box with a 1 month Xbox Game Pass trial
  Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon, Hulu, Microsoft Movies & TV, and more
  Play with friends and family near and far—sitting together on the sofa or around the world on Xbox Live, the fastest, most reliable gaming network
  Xbox 1 games and accessories work together
  `, 
    imgs : ["https://m.media-amazon.com/images/I/71NBQ2a52CL._SX522_.jpg", 
    "https://m.media-amazon.com/images/I/61XJWRM87tL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/71v60JZANrL._SX522_.jpg"
    ],
    category:"Games",
    rating:4.8
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
  @Output() ev = new EventEmitter();
  // @Output() ev = new EventEmitter<{prod : Product}>();
  product : any;
  img_num = 0;
  descriptions = []
  constructor(private service:ProductItemService) { 
  }
  getProduct():void {
    this.product = this.service.getProduct(this.idd);
    this.descriptions = this.product.description.split('\n')
    // for (let desc of this.descriptions) {
    //   // if (desc.length > 1)
    // }
    if (this.descriptions.length > 1)
      this.descriptions.pop();
    // console.log(this.descriptions);
    
  }
  add () : void {
    this.ev.emit(this.product);
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
    // console.log(this.idd);
  }

}
