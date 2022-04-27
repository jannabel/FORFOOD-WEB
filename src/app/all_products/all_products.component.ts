import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-all_products',
  templateUrl: './all_products.component.html',
  styleUrls: ['./all_products.component.css']
})
export class All_productsComponent implements OnInit {

  constructor(public json: ProductsService) { }

  products: any = [];

  ngOnInit() {

    this.json.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });

  }

  //write a function with http get request to get all products from https://localhost:7027/api/Products/Get
  //and display them in the html page
  


}
