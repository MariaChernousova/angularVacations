import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { TableModule } from './components/table/table.module';
import { DateService } from './services/date.service';
import { Request } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

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
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      
    ]),
    
  ],
  providers: [
    DateService,
    Request,
    BsModalRef,
    DatePipe
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
