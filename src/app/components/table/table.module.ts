import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table.component';
import { DateService } from 'src/app/services/date.service';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [CellComponent, TableComponent, TeamComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent],
  providers: [DateService]
})
export class TableModule { }
