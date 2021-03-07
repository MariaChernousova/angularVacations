import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {departmentTeams} from '../teamData/teamData';
import {DataTypes} from '../dataTypes/dataTypes';
import {Team} from './team.service';
import {User} from './user.service';

@Injectable()
export class Request {
    dataStream: Subject<object> = new Subject();
    data: DataTypes;

    constructor(
        private team: Team,
        private user: User,) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify([departmentTeams]),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    this.data = json[0];
                    this.team.setTeams(this.data.teams);
                    this.user.setUsers(this.data.users);
                    this.dataStream.next();
                });
    }
}