import { Component, Input } from '@angular/core';
import { VacationData } from 'src/app/dataTypes/vacationData';
import { VacationTypes } from 'src/app/dataTypes/vacationsTypes';
import { DateService } from 'src/app/services/date.service';
import { VacationService } from 'src/app/services/vacation.service';

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

  @Input()
  vacations: VacationTypes[];

  @Input()
  teamClassName: string;

  public isWeekend:boolean;
  public vacationData: VacationData; 
  public isVacation: boolean = false;

  constructor(
    private readonly dateService: DateService,
    private readonly vacationService:VacationService
  ) {}

  ngOnInit() {
    if(this.date) {
      this.isWeekend = this.dateService.isWeekend(this.date);

      if(this.vacations) {
        
        this.vacationData = this.vacationService.isDayVacation(this.date, this.vacations);
        console.log(this.vacationData);
        

        if(this.vacationData) {
          this.isVacation = true;

        console.log(this.vacationData);
        }
      }

    }

  }
}
