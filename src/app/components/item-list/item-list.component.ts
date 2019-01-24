import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../menu.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  itemsB: [] = [];

  constructor(private service: MenuService) {
    this.service.getItems().subscribe((res) => {
      this.items = res;
    });
  }

  ngOnInit() {

  }

}
