import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
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
    category:"Games",
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
  Access your favorite entertainment through apps like YouTube, Netflix, and more\n
  Enjoy over 100 games right out of the box with a 1 month Xbox Game Pass trial\n
  Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon, Hulu, Microsoft Movies & TV, and more\n
  Play with friends and family near and far—sitting together on the sofa or around the world on Xbox Live, the fastest, most reliable gaming network
  Xbox 1 games and accessories work together\n
  `, 
    imgs : ["https://m.media-amazon.com/images/I/71NBQ2a52CL._SX522_.jpg", 
    "https://m.media-amazon.com/images/I/61XJWRM87tL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/71v60JZANrL._SX522_.jpg"
    ],
    category:"Games",
    rating:4.8
  }, 
  { id:16, name:"MOON Teeth Whitening Strips, 28 Treatments, 56 Count", description:`
  Creating innovation in Teeth Whitening: Our dissolving Whitening strips are super easy to use – they are very thin and adhere easily to the teeth and dissolve within 15 minutes. Intended for use morning and night for 2 weeks to see results of 7 shades whiter teeth. They taste great too! Freshening mint flavor to not only whiten but refresh the mouth.
Easy to add to your routine: These strips are extremely thin so can be popped on during any point of the day. They dissolve quickly and freshen and are thin enough to be used while on phone calls or out and about – they are very hard to notice.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/71ppoQrrBXS._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/815-lVImhxS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/81G3jHEoazS._AC_SX679_.jpg"
    ],
    category:"Health",
    rating:4.3
  },
  { id:17, name:"TruSkin Vitamin C Serum for Face", description:`
  ANTI AGING FACE SERUM - Vitamin C blends with Botanical Hyaluronic Acid, Vitamin E, Witch Hazel, and Jojoba Oil in an anti aging, skin brightening formula designed to improve wrinkles and dark spots
OUR CUSTOMERS KNOW BEST - Don't just take our word for it, see thousands of reviews from real Amazon customers rave about brighter, fresher looking skin
PLANT-BASED FORMULATION - No added synthetic colors, fragrances, parabens, phthalates, sulfates, PEGs, or GMOs. Our active botanicals combine in a silky smooth anti-aging serum that can be used day or night.
CERTIFIED CRUELTY FREE by Leaping Bunny, our Vitamin C facial serum is also formulated, manufactured and bottled in the USA for guaranteed freshness
EXTENDED MANUFACTURER GUARANTEE - Love it or your money back! If for any reason you decide this product isn't a good fit for your skin, we offer a 90-day money-back refund. The expiration date is printed on the barcode sticker attached to the packaging.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/61YLsxEr33L._SX466_.jpg", 
    "https://m.media-amazon.com/images/I/51D-NKk+P-L._SX466_.jpg",
    "https://m.media-amazon.com/images/I/61nD93IEBKL._SX466_.jpg"
    ],
    category:"Health",
    rating:4.8
  },
  { id:18, name:"Dove Body Wash with Pump", description:`
  Dove Deep Moisture Body Wash is Just As Effective for Cleaning Hands
  MILD AND PH-BALANCED: Dove body wash includes Moisture Renew Blend—a combination of skin-natural nourishers and plant-based moisturizers that absorb deeply into the top layers of skin
  DERMATOLOGIST RECOMMENDED BODY WASH: Nourishes skin with a rich, creamy formula, leaving your skin softer than a shower gel can.
  THOUGHTFULLY MADE: This body wash is PETA-certified cruelty free and made in 100% recycled plastic bottles, so you can feel good about switching from everyday shower soap to Dove body wash.
  PLANT-BASED MOISTURIZER: Naturally-derived cleansers and skin-natural nutrients, creamy body wash from Dove is microbiome gentle, so you’ll get beautifully nourished while maintaining healthy skin
  CARE AS YOU CLEAN: The cleansing efficacy and care you need, all in one product.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/71NbfFpRvzL._SX466_.jpg", 
    "https://m.media-amazon.com/images/I/81JFz0S791L._SX466_.jpg",
    "https://m.media-amazon.com/images/I/91eQ-gF+ypL._SX466_.jpg"
    ],
    category:"Health",
    rating:4.8
  },
  { id:19, name:"Dr Teal’s Foaming Bath with Pure Epsom Salt", description:`
  SOOTHE SORE MUSCLES & TIRED FEET: Dr Teal’s Foaming Bath transforms an ordinary bath in a relaxing spa by combining Pure Epsom Salt (Magnesium Sulfate USP) and luxurious essential oils to soothe the senses, revitalize tired, achy muscles and help provide relief from stress.
  ESSENTIAL OIL BENEFITS: The Lavender in our Soothe & Sleep Foaming Bath has soothing properties that have long been known to help relax mind and body and promote a better night’s sleep.Vegan
  EASY TO USE: Pour a generous amount of Dr Teal's Foaming Bath under warm, running water for a relaxing bubble bath experience. Making Dr Teal's a regular part of your routine can help keep you feeling rejuvenated and your skin hydrated and healthy.Cruelty free
  LONG LASTING BUBBLES: Dr Teal’s Foaming Bath creates long lasting soap bubbles that gently cleanse and nourish skin for a spa-like experience whenever you step in the bath.
  SUBSCRIBE & SAVE: Dr Teal’s Epsom Salt Foaming Bath is already a great value, but use Amazon’s “Subscribe and Save” feature to save even more on your favorite fragrances, all made in the USA.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/71xDqnt4soS._SX466_.jpg", 
    "https://m.media-amazon.com/images/I/71p6WQPZcCS._SX466_.jpg",
    "https://m.media-amazon.com/images/I/61wjq7u8tRS._SX466_.jpg"
    ],
    category:"Health",
    rating:4.8
  },
  { id:20, name:"Water Dental Flosser Cordless Oral Irrigator", description:`
  Professional Improve Dental Health and Teeth Clean: Adopt advanced water flossing technology, 30-100psi, 1400-1800 times/min water pulsation,this powerful cordless oral irigator can remove food residue every corner effectively that regular toothbrush can not reach. It’s perfect for anyone with braces, crowns, or periodontal pockets.
3 Cleaning Modes with Memory Function: The cordless oral teeth cleaner has Normal, Soft, Pulse modes to meet various oral needs.Soft mode is recommended for first-time user and sensitive teeth.The memory function helps to remain the working mode for next use.
360° Rotatable & Replacement Water Jet Tip: Water teeth flosser offer 5 replacement nozzles(2 Standard Jet Tips,1 Orthodontic Tip,1 Plaque Brush Tip, 1 Tongue Cleaner Tip) for your whole family.The 360° rotatable nozzle design help you easily access to all areas of the mouth.
300ML Detachable Water Tank & IPx7 Waterproof: 300ml water capacity perfect for enough and uninterrupted oral dental flossing.Detachable design allows you to thoroughly clean the limescale inside the tank. Plus the IPX7 waterproof and can be used in the shower.
Long Battery Life & Auto-timer Protect: The powerful battery can be used continuously for 14 days just fully charged in 4 hours.The water follosing pick will be stop running automatically after two minutes of work to ensures your safety and water dental flosser's lifespan
  `, 
    imgs : ["https://m.media-amazon.com/images/I/61AJf7Km3VL._SX466_.jpg", 
    "https://m.media-amazon.com/images/I/6186i6ZmwDL._SX466_.jpg",
    "https://m.media-amazon.com/images/I/61Kqbk5w7UL._SX466_.jpg"
    ],
    category:"Health",
    rating:4.8
  },
  { id:21, name:"Kindle Oasis – Now with adjustable warm light – Ad-Supported", description:`
  Our best 7", 300 ppi flush-front Paperwhite display.
Adjustable warm light to shift screen shade from white to amber.
Waterproof (IPX8) so you can read in the bath or by the pool. Your Kindle has been tested to withstand accidental immersion in water.
Thin and light ergonomic design with page turn buttons.
Reads like real paper with the latest e-ink technology for fast page turns.
Instant access to millions of books, newspapers, and audiobooks.
Works with Audible - pair with Bluetooth headphones or speakers to switch seamlessly between reading and listening.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/61AY21DkpXL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61moEqqnwzL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61AY21DkpXL._AC_SX679_.jpg"
    ],
    category:"E-Books",
    rating:4.6
  },
  { id:22, name:"International Version – Kindle Oasis – Now with adjustable warm light - 8 GB, Graphite", description:`
  Our best 7", 300ppi flush-front Paperwhite display
Adjustable warm light to shift screen shade from white to amber
Waterproof (IPX8) so you can read in the bath or by the pool
Thin and light ergonomic design with page turn buttons
Reads like real paper with the latest e-ink technology for fast page turns
Instant access to millions of books and newspapers.
  `, 
  imgs : ["https://m.media-amazon.com/images/I/61AY21DkpXL._AC_SX679_.jpg", 
  "https://m.media-amazon.com/images/I/61moEqqnwzL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61AY21DkpXL._AC_SX679_.jpg"
  ],
    category:"E-Books",
    rating:4.3
  },
  { id:23, name:"Kindle Paperwhite Essentials Bundle including Kindle Paperwhite - Wifi, Ad-supported, Amazon Leather Cover, and Power Adapter", description:`
  All-new Kindle Paperwhite – Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.
Purpose-built for reading – With a flush-front design and 300 ppi glare-free display that reads like real paper, even in bright sunlight.
More books in more places – Store thousands of titles, then take them all with you. A single charge via USB-C last weeks, not hours.
Easy on the eyes – Now with adjustable warm light to shift screen shade from white to amber.
Waterproof reading – Built to withstand accidental immersion in water, so you’re good from the beach to the bath.
Find new stories – With Kindle Unlimited, get unlimited access to over 2 million titles, thousands of audiobooks, and more.
Go hands free – Pair with an Audible subscription and Bluetooth headphones or speakers to listen to your story.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/614Vd2poKsL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/614Vd2poKsL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/614Vd2poKsL._AC_SX679_.jpg"
    ],
    category:"E-Books",
    rating:4.8
  },
  { id:24, name:"Kobo Elipsa Pack", description:`
  𝗧𝗛𝗘 𝗠𝗨𝗦𝗧-𝗛𝗔𝗩𝗘 𝗪𝗥𝗜𝗧𝗜𝗡𝗚 & 𝗥𝗘𝗔𝗗𝗜𝗡𝗚 𝗣𝗔𝗖𝗞𝗔𝗚𝗘 – Includes the Kobo Elipsa eReader, Kobo Stylus, and SleepCover. The Kobo Stylus lets you write directly on the page, just like a pen on paper. The SleepCover is designed to stand at the optimum height for writing and reading, and puts your eReader to sleep when you close it
𝗠𝗔𝗥𝗞 𝗨𝗣 𝗬𝗢𝗨𝗥 𝗘𝗕𝗢𝗢𝗞𝗦 & 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦 – The Kobo Elipsa makes reading and marking up nonfiction reads, essays, or assignments a breeze. Use the Kobo Stylus to underline, circle, or highlight. When an idea sparks, write it down in the margins. Make every eBook and PDF* your own and easily save, organize, and find all your annotations
𝗚𝗟𝗔𝗥𝗘 𝗙𝗥𝗘𝗘 & 𝗔𝗗𝗝𝗨𝗦𝗧𝗔𝗕𝗟𝗘 𝗕𝗥𝗜𝗚𝗛𝗧𝗡𝗘𝗦𝗦 – Our largest 10.3” glare-free touchscreen is the first to feature Carta 1200 E Ink technology for a faster display and quicker page turns. You can adjust brightness with ComfortLight to read and write at night or try out Dark Mode for white text on black
𝟯𝟮 𝗚𝗕 𝗢𝗙 𝗦𝗧𝗢𝗥𝗔𝗚𝗘 – With 32GB of storage, you'll be able to carry more than your book bag can handle. And when you're ready for a break, simply close the SleepCover to protect Kobo Elipsa and put it to sleep. This eReader is your book, notebook, and bookstore combined
𝗜𝗠𝗣𝗢𝗥𝗧 & 𝗘𝗫𝗣𝗢𝗥𝗧 𝗪𝗜𝗧𝗛 𝗗𝗥𝗢𝗣𝗕𝗢𝗫 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 – Easily import documents and export your notebooks as your preferred file type to share with colleagues, classmates, or anyone else Create notebooks that do more`, 
    imgs : ["https://m.media-amazon.com/images/I/71hjFlEGUhL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61ZMbgivDqL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51YxiifM9pL._AC_SX679_.jpg"
    ],
    category:"E-Books",
    rating:4
  },
  { id:25, name:"Kindle Paperwhite Signature Edition Essentials Bundle including Kindle Paperwhite Signature Edition - Wifi, Without Ads, Amazon Leather Cover, and Wireless charging dock", description:`
  Get more with Signature Edition – Everything in the all-new Kindle Paperwhite, plus wireless charging, auto-adjusting front light, and 32 GB storage.
Purpose-built for reading – With a flush-front design and 300 ppi glare-free display that reads like real paper, even in bright sunlight.
More reading time – A single charge via USB-C or compatible Qi wireless charger (sold separately) now lasts up to 10 weeks.
Adjustable screen – Now with adjustable warm light and auto-adjusting front light for a personalized reading experience, day or night.
More books in more places – Store thousands of titles, then take them all with you.
Find new stories – With Kindle Unlimited, get unlimited access to over 2 million titles, thousands of audiobooks, and more.
Go hands free – Pair with an Audible subscription and Bluetooth headphones or speakers to listen to your story.
  `, 
    imgs : ["https://m.media-amazon.com/images/I/514kPasUbWL._AC_SX679_.jpg", 
    "https://m.media-amazon.com/images/I/514kPasUbWL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/514kPasUbWL._AC_SX679_.jpg"
    ],
    category:"E-Books",
    rating:4.9
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  getProduct(idd : Number):Product {
    // console.log(idd);
    let prod = PRODUCTS[0]; 
    for (var prodd of PRODUCTS) {
      if (prodd.id === idd) {
        prod = prodd; 
        break;
      }
      // console.log(prodd);
    }
    const res = prod;
    return res;
  }
  constructor() { }
}
