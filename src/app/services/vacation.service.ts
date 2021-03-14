import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { VacationData } from '../dataTypes/vacationData';
import { VacationTypes } from '../dataTypes/vacationsTypes';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor(
      private datePipe: DatePipe
  ) { }

  getCountVacationDays(vacations : VacationTypes[], month: number): number  {
     let countVacationDays = 0;
     vacations.forEach((vacation) => {
         if((month + 1) === Number.parseInt(vacation.endDate.split(".")[1], 10)) {            
            countVacationDays += Number.parseInt(vacation.endDate.split(".")[0], 10) - Number.parseInt(vacation.startDate.split(".")[0], 10) +1
         }
    })

    return countVacationDays;
  }

  getDayVacation(date: Date, vacations: VacationTypes[]): VacationData{
    let result: VacationData;
    const currentDay = this.datePipe.transform(date, "dd.MM.yyyy");
         
    vacations.forEach((vacation) => {
      if (currentDay === vacation.startDate) {
        result = {
          type: vacation.type,
          days: Number.parseInt(vacation.endDate.split(".")[0], 10) - Number.parseInt(vacation.startDate.split(".")[0], 10),
        } ;
      }
    })

    return result;
  }

}