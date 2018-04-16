import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user';

@Injectable()
export class UserService {

  // We need Http to talk to a remote server.
  constructor(private _http : Http) { }
  // Get list of users from remote server.
  readUsers(): Observable<User[]>{
      return this._http
          .get("http://localhost:3000/users")
          .map(res => res.json());

  }

}
