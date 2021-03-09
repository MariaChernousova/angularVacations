import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table.component';
import { DateService } from 'src/app/services/date.service';
import { TeamComponent } from './team/team.component';
import { TeamInfoComponent } from './team/team-info/team-info.component';
import { MemberComponent } from './team/member/member.component';


@NgModule({
  declarations: [CellComponent, TableComponent, TeamComponent, TeamInfoComponent, MemberComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent],
  providers: [DateService]
})
export class TableModule { }
