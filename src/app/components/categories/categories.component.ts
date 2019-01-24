import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories;
  @Output() onSelectCategory: EventEmitter<any> = new EventEmitter();
  @Output() onEditCategory: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectCategory(category) {
    this.onSelectCategory.emit(category);
  }

  edit(category) {
    this.onEditCategory.emit(category);
  }
}
