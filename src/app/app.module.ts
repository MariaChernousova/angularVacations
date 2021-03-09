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
// import {AppRoutingModule} from './app-routing.module';
import { DateService } from './services/date.service';
import { Request } from './services/request.service';
// import { Team } from './services/team.service';
// import { User } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule
  ],
  providers: [
    DateService,
    Request,
    // Team,
    // User,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
