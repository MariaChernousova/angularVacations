import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table.component';




@NgModule({
  declarations: [CellComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
