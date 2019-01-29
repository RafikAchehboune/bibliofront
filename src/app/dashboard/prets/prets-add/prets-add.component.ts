import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PretsComponent } from '../prets.component';
import { PretsService } from '../../prets.service';

@Component({
  selector: 'app-prets-add',
  templateUrl: './prets-add.component.html',
  styleUrls: ['./prets-add.component.css']
})
export class PretsAddComponent implements OnInit {

  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('user') userRef: ElementRef;
  @ViewChild('date') dateRef: ElementRef;

  constructor(private pretsService: PretsService) { }

  ngOnInit() {
  }

  addPret(title: HTMLInputElement, user: HTMLInputElement, date: HTMLInputElement) {
    this.pretsService.ajouterPret(title.value, user.value, date.value);
  }

}
