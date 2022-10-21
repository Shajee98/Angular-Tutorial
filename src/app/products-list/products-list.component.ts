import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number,
  name: string,
  price: number
}

@Injectable({
  providedIn: 'root',
 })
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {

  public activeCategory: string = 'Accessories'

  public productList: Product[] = [
    {
      id: 0,
      name: 'Laptop',
      price: 200
    },
    {
      id: 1,
      name: 'Computer',
      price: 300
    }
  ]

  constructor(private router: Router) {
   }

  addProducttoList(product: Product): void {
    this.productList.push(product);
  }

  deleteProduct(id: number): void {
   this.productList = this.productList.filter(p => p.id != id)
  }

  showDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }

  recieveCategory(event: string) {
    this.activeCategory = event;
    console.log(this.activeCategory);
  }
  ngOnInit(): void {
  }

}
