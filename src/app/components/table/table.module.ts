import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table.component';
import { DateService } from 'src/app/services/date.service';




@NgModule({
  declarations: [CellComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent],
  providers: [DateService]
})
export class TableModule { }
