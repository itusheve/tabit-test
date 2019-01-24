import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {MenuService} from '../../menu.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @ViewChild('modal') modal: ModalDirective;
  category: any;
  items: any[] = [];
  selectedItem: any;

  constructor(private service: MenuService) {
  }

  ngOnInit() {
  }

  show(category) {
    this.category = JSON.parse(JSON.stringify(category));
    this.getItemItems();

    this.modal.show();
  }

  private getItemItems() {
    this.service.getItems().subscribe((res: any) => {
      this.items = res;
    });
  }

  addItem() {
    if (this.category.items.indexOf(this.selectedItem) === -1) {
      this.category.items.push(this.selectedItem);
    }
  }

  remove(item) {

    let itemToremove = _.find(this.category.items, (i: any) => {
      return i.id === item.id;
    });
    if (itemToremove) {
      const index = this.category.items.indexOf(itemToremove);
      if (index !== -1) {
        this.category.items.splice(index, 1);
      }
    }

  }

  get categoryItems() {
    const arr = [];
    this.items.forEach((item) => {

      let itemInList = _.find(this.category.items, (i: any) => {
        return i.id === item.id;
      });
      if (itemInList) {
          arr.push(itemInList);
      }
    });
    return arr;

  }

  save() {
    this.onSave.emit(this.category);
    this.modal.hide();
  }

}
