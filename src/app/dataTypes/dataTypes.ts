import { TeamTypes } from './teamTypes';
import { UserTypes } from './userTypes';
import { VacationTypes } from './vacationsTypes';

export interface DataTypes {
  teams: TeamTypes[];
  users: UserTypes[];
  vacations: VacationTypes[];
}