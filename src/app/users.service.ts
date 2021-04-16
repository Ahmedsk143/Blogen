import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    { name: 'John Doe', email: 'jdoe@gmail.com' },
    { name: 'Harry White	', email: 'harry@yahoo.com' },
    { name: 'Mary Johnson', email: 'mary@gmail.com' },
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }
}
