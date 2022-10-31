import { EventEmitter } from '@angular/core';

export class ProductService {
  products = [
    { name: 'HP Pavellion', price: 200 },
    { name: 'MacBook Air', price: 400 },
    { name: 'Dell Inspiron', price: 270 },
    { name: 'Microsoft Surface', price: 300 },
  ];

  onShowDetailsclicked = new EventEmitter<{ name: string; price: number }>();

  showDetailsClicked(product: { name: string; price: number }) {
    this.onShowDetailsclicked.emit(product);
  }
}
