import {Injectable} from '@angular/core';
import { UserTypes } from '../dataTypes/userTypes';

@Injectable()
export class User {
    users: UserTypes[];
  setUsers(users): void {
    this.users = users;
  }
  getUsers(): UserTypes[] {
    return this.users;
  }
}