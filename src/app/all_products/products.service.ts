import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://localhost:7027/api/Products/Get');
  }

}
