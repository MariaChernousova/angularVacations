import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date/date.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private readonly dateService: DateService,
  ) {
  }

  public monthDays: Date[] = [];

  @Input()
  date: Date;
  
  ngOnInit(){
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

  ngOnChanges(){
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

}
