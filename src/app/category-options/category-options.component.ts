import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'category-options',
  templateUrl: './category-options.component.html',
  styleUrls: ['./category-options.component.scss']
})
export class CategoryOptionsComponent implements OnInit {

  @Output() sendCategory: EventEmitter<string> = new EventEmitter()

  constructor() { }

  private selectedCategory: string | undefined = "Accessories"
  private categoryTypes: string[] = ["Accessories","Laptops", "Mobiles", "Desktop"]

  onClick(type: string) {
    this.selectedCategory = this.categoryTypes.find(category => {
      return category === type
    })
    // console.log(this.selectedCategory)
    this.sendCategory.emit(this.selectedCategory)
  }

  ngOnInit(): void {

  }

}
