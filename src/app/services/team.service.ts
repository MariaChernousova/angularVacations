import {Injectable} from '@angular/core';
import { TeamTypes } from '../dataTypes/teamTypes';

@Injectable()
export class Team {
  teams: TeamTypes[];
  setTeams(teams): void {
    this.teams = teams;
  }
  getTeams(): TeamTypes[] {
    return this.teams;
  }
}