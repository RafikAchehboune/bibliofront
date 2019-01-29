import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UsersService {
  private users = [
    {
      'n': 1,
      'name': 'Harold Aspden',
      'email': 'haspden@iee.org'
    },
    {
      'n': 2,
      'name': 'Patrick Bailey',
      'email': 'patrick@outlook.com'
    },
    {
      'n': 3,
      'name': 'John Bedini',
      'email': 'pgb@padrak.com'
    },
    {
      'n': 4,
      'name': 'Robert E. Beutlich',
      'email': 'kbala@elknet.net'
    },
    {
      'n': 5,
      'name': 'Dr. Tim Binder',
      'email': 'science@pobox.com'
    }
  ];
  private usersUpdate = new Subject<{users: any}>();

  getUsers() {
    return [...this.users];
  }

  getUsersUpdateListner() {
    return this.usersUpdate.asObservable();
  }

  ajouterUser(name: string, email: string) {
    const len = this.users.length + 1;
    this.users.push({
      'n': len,
      'name': name,
      'email': email
    });
    this.usersUpdate.next({ users: [...this.users]});
  }
}
