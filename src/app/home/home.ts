import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products = [  
    {
  "_id": {
    "$oid": "6a292c7cf33128c2d3b8d79f"
  },
  "name": "OPPO F21s Pro 5G",
  "price": 245.67,
  "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
  "ratings": 4.5,
  "images": [
    {
      "image": "/images/products/1.jpg"
    },
    {
      "image": "/images/products/2.jpg"
    }
  ],
  "category": "Mobile Phones",
  "seller": "Amazon",
  "stock": 5
},
  {
  "_id": {
    "$oid": "6a292c7cf33128c2d3b8d7a1"
  },
  "name": "Dell Inspiron 3511 Laptop",
  "price": 440.57,
  "description": "Dell Inspiron 3511 11th Generation Intel Core i5-1135G7 Processor (8MB Cache, up to 4.2 GHz);Operating System: Windows 10 Home Single Language, English",
  "ratings": 2,
  "images": [
    {
      "image": "/images/products/3.jpg"
    }
  ],
  "category": "Laptops",
  "seller": "Ebay",
  "stock": 9
}
  ];

}
