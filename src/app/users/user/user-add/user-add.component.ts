import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('auteur') userRef: ElementRef;
  @ViewChild('motsCles') dateRef: ElementRef;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(name: HTMLInputElement, email: HTMLInputElement) {
    this.usersService.ajouterUser(name.value, email.value);
  }

}
