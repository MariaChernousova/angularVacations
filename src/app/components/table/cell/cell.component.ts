import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { VacationData } from 'src/app/dataTypes/vacationData';
import { VacationTypes } from 'src/app/dataTypes/vacationsTypes';
import { DateService } from 'src/app/services/date.service';
import { DayPersonStats } from 'src/app/services/dayPersonStats.service';
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
  public subscription: Subscription;
  public dayPersonsVacation: number[] = new Array; 

  constructor(
    private readonly dateService: DateService,
    private readonly vacationService:VacationService,
    public  dayPersonStats: DayPersonStats
  ) {}


  ngOnInit() {
    if(this.date) {
      this.isWeekend = this.dateService.isWeekend(this.date);

      if(this.vacations) {
        
        this.vacationData = this.vacationService.getDayVacation(this.date, this.vacations);     

        if(this.vacationData) {
          this.isVacation = true;
          // for(let day = this.date.getDate() - 1; day <= day+this.vacationData.days; day++) {
          //   this.dayPersonStats.getDayPersonStats()[day] ? this.dayPersonStats.setDayPersonStats(this.dayPersonStats.getDayPersonStats()[day] + 1 , day) : this.dayPersonStats.setDayPersonStats(1 , day)
          //   console.log(this.dayPersonsVacation);
          // }
        }
      }

    }

  }
}
