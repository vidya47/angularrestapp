import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css'],
  providers: [UserService]
})
export class ReadUsersComponent implements OnInit {
  // store list of users
    users: User[];

  // initialize userService to retrieve list users in the ngOnInit()
  constructor(private userService: UserService) { }

  // methods that we will use later
    createUser(){}
    readOneUser(id){}
    updateUser(id){}
    deleteUser(id){}

  // Read products from API.
  ngOnInit() {
    this.userService.readUsers()
          .subscribe(users =>
              this.users=users['records']
          );
  }

}
