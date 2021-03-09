import { VacationTypes } from "./vacationsTypes";

export interface UserTypes {
    // id: number;
    // name: string;
    // teamId: number;

    name: string
  id: number | string
  vacations: VacationTypes[]
  }