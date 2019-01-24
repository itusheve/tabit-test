import {Component, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {MenuService} from '../../menu.service';

@Component({
  selector: 'app-item-details-modal',
  templateUrl: './item-details-modal.component.html',
  styleUrls: ['./item-details-modal.component.css']
})
export class ItemDetailsModalComponent implements OnInit {
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @ViewChild('modal') modal: ModalDirective;
  item: any;
  modifierGroups: any[] = [];
  modifiers: any[] = [];
  selectedMg: any;

  constructor(private service: MenuService) {
  }

  ngOnInit() {
  }

  show(item) {
    this.item = JSON.parse(JSON.stringify(item));
    this.getItemRelatedData();

    this.modal.show();
  }

  private getItemRelatedData() {
    this.service.getModifierGroups().subscribe((res: any) => {
      this.modifierGroups = res;
    });

    this.service.getModifiers().subscribe((res: any) => {
      this.modifiers = res;
    });
  }

  addItemModifierGroup() {
    if (this.item.modifier_groups_id.indexOf(this.selectedMg.id) === -1) {
      this.item.modifier_groups_id.push(this.selectedMg.id);
    }
  }

  remove(mg) {
    const index = this.item.modifier_groups_id.indexOf(mg.id);
    if (index !== -1) {
      this.item.modifier_groups_id.splice(index, 1);
    }
  }

  get itemModifierGroups() {
    const arr = [];
    this.modifierGroups.forEach((mg) => {
      if (this.item.modifier_groups_id.indexOf(mg.id) > -1) {
        arr.push(mg);
      }
    });
    return arr;

  }

  save() {
    this.onSave.emit(this.item);
    this.modal.hide();
  }
}

