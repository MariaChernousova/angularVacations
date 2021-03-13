import { Injectable } from '@angular/core';
import { VacationData } from '../dataTypes/vacationData';
import { VacationTypes } from '../dataTypes/vacationsTypes';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor() { }

//   getCountVacationDays(vacation : VacationData): number  {
//      let countVacationDays = 0;
//         vacation

//     return countVacationDays;
//   }

  isDayVacation(date: Date, vacations: VacationTypes[]): VacationData{
    let result: VacationData;
    const day = date.toLocaleDateString('en-US', {
        day: '2-digit'
    });
    const month = date.toLocaleDateString('en-US', {
        month: '2-digit'
    });
    const year = date.toLocaleDateString('en-US', {
        year: 'numeric'
    })

    const currentDay = `${day}.${month}.${year}`
         
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