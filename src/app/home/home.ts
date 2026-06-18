import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products: any[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }

}
