import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit, OnDestroy {

  livres = [];
  private livresSub: Subscription;

  constructor(private livresService: LivresService) { }

  ngOnInit() {
    this.livres = this.livresService.getLivres();
    this.livresSub = this.livresService.getLivresUpdateListner().subscribe( (livres) => {
      this.livres = livres.livres;
      console.log(livres);
    });
  }

  ngOnDestroy() {
    this.livresSub.unsubscribe();
  }
}
