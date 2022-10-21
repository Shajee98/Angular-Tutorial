import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

interface Product {
  id: number,
  name: string,
  price: number
}

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output() productCreated: EventEmitter<Product> = new EventEmitter();

  public product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(public activeModal: NgbActiveModal) {
   }

  addProduct() {
    this.productCreated.emit(this.product)
    console.log(this.product.name, " " + this.product.price)
  } 

  ngOnInit(): void {
  }
}
