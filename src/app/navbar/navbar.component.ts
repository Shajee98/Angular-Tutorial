import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showModal: boolean = false;
  constructor(private modalDialog: NgbModal) {}
  openModal() {
    this.modalDialog.open(AddProductComponent)
  }

  ngOnInit(): void {
  }

}
