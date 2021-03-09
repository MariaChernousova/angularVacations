import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs'
import {departmentTeams} from '../teamData/teamData';
import {DataTypes} from '../dataTypes/dataTypes';
// import {Team} from './team.service';
// import {User} from './user.service';
import { HttpClient } from '@angular/common/http';
import {TeamTypes} from '../dataTypes/teamTypes';
import { switchMap, catchError } from 'rxjs/operators'
import { URL, OPTIONS } from '../teamData/constants'

// @Injectable()
// export class Request {
//     dataStream: Subject<object> = new Subject();
//     data: DataTypes;

//     constructor(
//         private team: Team,
//         private user: User,) {
//             fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify([departmentTeams]),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     this.data = json[0];
//                     this.team.setTeams(this.data.teams);
//                     this.user.setUsers(this.data.users);
//                     this.dataStream.next();
//                 });
//     }
// }

@Injectable({
    providedIn: 'root'
  })

  export class Request {
      constructor(private http: HttpClient){}

      getTeams(): Observable<TeamTypes[]>{
          return this.http.put<DataTypes>(URL, 
          departmentTeams, 
          OPTIONS).pipe(
            switchMap(result => of(result.teams)),
            catchError(error => of(error))
          )
      }


  }
