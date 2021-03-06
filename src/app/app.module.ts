import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { UtilsComponent } from './components/utils/utils.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { CellComponent } from './components/table/cell/cell.component';
import { TableModule } from './components/table/table.module';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    UtilsComponent,
    ModalComponent,
    NavigationComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
