import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './services/product.service';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  @ViewChild('popupRef', { static: false }) addProduct = AddProductComponent;
  showModal: boolean = false;

  constructor(
    private modalDialog: NgbModal,
    private productList: ProductsListComponent
  ) {}
  openModal() {
    this.modalDialog.open(this.addProduct);
  }
  productAdded(event: Product) {
    // this.productList.addProducttoList({id: event.id, name: event.name, price: event.price})
    // this.showModal = true;
    // console.log(this.showModal)
    console.log(event);
  }
  ngOnInit(): void {}
}
