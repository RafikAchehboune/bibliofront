import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users = [];
  private usersSub: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.usersSub = this.usersService.getUsersUpdateListner().subscribe( (users) => {
      this.users = users.users;
      console.log(users);
    });
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }

}
