import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LivresService } from '../../livres.service';

@Component({
  selector: 'app-livres-add',
  templateUrl: './livres-add.component.html',
  styleUrls: ['./livres-add.component.css']
})
export class LivresAddComponent implements OnInit {

  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('auteur') userRef: ElementRef;
  @ViewChild('motsCles') dateRef: ElementRef;

  constructor(private livresService: LivresService) { }

  ngOnInit() {
  }

  addLivre(title: HTMLInputElement, auteur: HTMLInputElement, motsCles: HTMLInputElement) {
    this.livresService.ajouterLivre(title.value, auteur.value, motsCles.value);
  }

}
