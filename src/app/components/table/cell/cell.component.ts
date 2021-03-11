import { Component, Input } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'table-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  
  @Input()
  public className: string;

  @Input()
  date: Date;

  public isWeekend:boolean;

  constructor(
    private readonly dateService: DateService
  ) {}

  ngOnInit() {
    if(this.date) {
      this.isWeekend = this.dateService.isWeekend(this.date);
      console.log(this.isWeekend);
    }
    
  }
}
