import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number,
  name: string,
  price: number,
}

@Component({
  selector: 'category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss']
})
export class CategoryItemsComponent implements OnInit {

  @Input() category: string = ""
  // private url : string = ""
  // public items: Array<any> = []
  constructor(private http: HttpClient) { }

  // getList() {
  //   switch (this.category) {
  //     case "Accessories":
  //       this.url = "http://localhost:4200/accessories.json"; 
  //   }
  //   this.http.get<any>(this.url).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  ngOnInit(): void {
    // this.getList()
    console.log(this.category)
    // console.log(this.url)
  }

}
