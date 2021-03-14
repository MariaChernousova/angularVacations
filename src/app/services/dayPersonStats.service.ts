import { Injectable } from '@angular/core';
import { TeamTypes } from '../dataTypes/teamTypes';

@Injectable({
  providedIn: 'root',
})
export class DayPersonStats {

  constructor(
  ){}

  public countVacationPeople: number;
  public countPeople: number;
  public percentageOfAbsentPeople: number;

  getCountPeople(teams: TeamTypes[]) : number {
    this.countPeople = 0;
    teams.forEach(team => {
      this.countPeople += team.members.length;
    })

    return this.countPeople;
  }

  getCountVacationPeople(teams: TeamTypes[], date: Date) : number {
    this.countVacationPeople = 0;
    const month = date.getMonth() + 1;
    teams.forEach(team => {
      team.members.forEach(member => {
        member.vacations.forEach(vacation => {
          if(Number.parseInt(vacation.startDate.split(".")[1], 10) === month) {
            this.countVacationPeople += 1;
          }
        })
      });
    })

    return this.countVacationPeople;
  }

  getPercentageOfAbsentPeople(countPeople, countVacationPeople) {
    return Math.round((countVacationPeople * 100) / countPeople);
  }
}