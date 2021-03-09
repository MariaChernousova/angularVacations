import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { TableModule } from './components/table/table.module';
import { DateService } from './services/date.service';
import { Request } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
