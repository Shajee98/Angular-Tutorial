import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: { name: string; price: number }[] = [];

  showDetails(product: { name: string; price: number }) {
    this.productService.showDetailsClicked(product);
  }

  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
