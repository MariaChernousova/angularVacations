import { VacationTypes } from "./vacationsTypes";

export interface UserTypes {
  name: string
  id: number | string
  vacations: VacationTypes[]
}
