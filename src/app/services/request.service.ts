import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs'
import {departmentTeams} from '../teamData/teamData';
import {DataTypes} from '../dataTypes/dataTypes';
import { HttpClient } from '@angular/common/http';
import {TeamTypes} from '../dataTypes/teamTypes';
import { switchMap, catchError } from 'rxjs/operators'
import { URL, OPTIONS } from '../teamData/constants'

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
