import {Injectable} from '@angular/core';
import * as menuItems from './components/menu-data';
import {of} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items = [];

  constructor() {
  }

  getCategories() {
    return of(menuItems.catIems.categories);
  }

  getModifierGroups() {
    return of(menuItems.modifierGruop.modifier_groups);
  }

  getModifiers() {
    return of(menuItems.modifiers.modifiers);
  }

  getItems() {
    if (this.items.length === 0) {
      menuItems.catIems.categories.forEach((c: any) => {
        c.items.forEach((i: any) => {
          this.items.push(i);
        });
      });
    }
    return of(this.items);
  }

  updateItem(category, item) {

    let foundedCat = _.find(menuItems.catIems.categories, (c) => {
      return c.id === category.id;
    });

    if (foundedCat) {
      let foundedItem = _.find(foundedCat.items, (i) => {
        return i.id === item.id;
      });
      if (foundedItem) {
        let index = foundedCat.items.indexOf(<any>foundedItem);
        foundedCat.items[index] = item;

        return of(foundedCat);
      }
    }
    return of(null);
  }

  updateCategory(category) {

    let foundedCat = _.find(menuItems.catIems.categories, (c) => {
      return c.id === category.id;
    });

    if (foundedCat) {

      let index = menuItems.catIems.categories.indexOf(<any>foundedCat);
      menuItems.catIems.categories[index] = category;

      return of(category);
    }

    return of(null);
  }


}
