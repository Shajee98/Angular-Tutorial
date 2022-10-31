import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  // showModal: boolean = false;
  // @ContentChild(ProductDetailsComponent) content!: ProductDetailsComponent;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) // public templateRef: TemplateRef<unknown>
  {}

  product: { name: string; price: number } = { name: '', price: 0 };

  getProduct() {}

  ngOnInit(): void {
    this.productService.onShowDetailsclicked.subscribe(
      (data: { name: string; price: number }) => {
        this.product = data;
      }
    );
    this.id = this.route.snapshot.params['productId'];
    console.log(this.id);
  }
}
