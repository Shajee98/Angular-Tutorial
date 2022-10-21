import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  // showModal: boolean = false;
  // @ContentChild(ProductDetailsComponent) content!: ProductDetailsComponent;


  constructor(private route: ActivatedRoute,
    // public templateRef: TemplateRef<unknown>
    ) { }

  getProduct() {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    console.log(this.id);
  }

}
