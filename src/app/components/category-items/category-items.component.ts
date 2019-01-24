import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  @Input() items;
  @Output() onEditItem: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  edit(item) {
    this.onEditItem.emit(item);
  }

}
