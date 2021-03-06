import { UserTypes } from "./userTypes";

export interface TeamTypes {
  name: string
  percentageOfAbsent: number[]
  members: UserTypes[]
  id: number
}
