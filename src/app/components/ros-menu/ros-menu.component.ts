import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MenuService} from '../../menu.service';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap';
import {ItemDetailsModalComponent} from '../item-details-modal/item-details-modal.component';
import {EditCategoryComponent} from '../edit-category/edit-category.component';

@Component({
  selector: 'app-ros-menu',
  templateUrl: './ros-menu.component.html',
  styleUrls: ['./ros-menu.component.css']
})
export class RosMenuComponent implements OnInit {
  categories = [];
  selectedCtegory: any;

  @ViewChild('itemDetailsModal') itemDetailsModal: ItemDetailsModalComponent;
  @ViewChild('editCategoryModal') editCategoryModal: EditCategoryComponent;

  constructor(private service: MenuService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.service.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onEditCategory(category) {
    this.editCategoryModal.show(category);
  }

  onEditItem(item) {
    this.itemDetailsModal.show(item);
  }

  onSelectCategory(category) {
    this.selectedCtegory = category;
  }

  saveItem(item) {
    this.service.updateItem(this.selectedCtegory, item).subscribe((res: any) => {
      alert('item saved');
    });
  }

  saveCategory(category) {
    this.service.updateCategory(category).subscribe((res: any) => {
      this.selectedCtegory = res;
      alert('category saved');
    });
  }
}
