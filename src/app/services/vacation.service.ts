import { Injectable } from '@angular/core';
import { VacationData } from '../dataTypes/vacationData';
import { VacationTypes } from '../dataTypes/vacationsTypes';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor() { }

  // getVacation(vacations : VacationTypes[])  {
  //    const paidDays = vacations.map((vacation) => ({
  //           startDay: Number.parseInt(vacation.startDate.split(".")[0], 10),
  //           month: Number.parseInt(vacation.startDate.split(".")[1], 10),
  //           endDay: Number.parseInt(vacation.endDate.split(".")[0], 10),
  //           type: vacation.type,
  //         })
  //       );

  //       return paidDays;
  // }

  isDayVacation(date: Date, vacations: VacationTypes[]): VacationData{
    let result: VacationData;
    let currentDay = date.toLocaleDateString();


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