import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {ModifiersComponent} from './components/modifiers/modifiers.component';
import {ModifierGroupsComponent} from './components/modifier-groups/modifier-groups.component';
import {RosMenuComponent} from './components/ros-menu/ros-menu.component';
import {MenuService} from './menu.service';
import {RouterModule, Routes} from '@angular/router';
import {CategoryItemsComponent} from './components/category-items/category-items.component';
import {ItemDetailsModalComponent} from './components/item-details-modal/item-details-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { ItemListComponent } from './components/item-list/item-list.component';
import {DragulaModule} from 'ng2-dragula';
import { HeaderComponent } from './components/header/header.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';



const appRoutes: Routes = [
  {path: '', component: RosMenuComponent},
  {path: 'item-list', component: ItemListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ModifiersComponent,
    ModifierGroupsComponent,
    RosMenuComponent,
    CategoryItemsComponent,
    ItemDetailsModalComponent,
    ItemListComponent,
    HeaderComponent,
    EditCategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    ModalModule.forRoot(),
    DragulaModule.forRoot()

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
