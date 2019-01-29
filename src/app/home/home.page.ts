import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service'
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productsList: Product[] = [];

  constructor(private products: ProductsService) {

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void {
    this.products.getProducts()
      .subscribe(heroes => this.productsList = heroes);
  }

  onClick(name : String) {
    console.log(name);
  }
}
