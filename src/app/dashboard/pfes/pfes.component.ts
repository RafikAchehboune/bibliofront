import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PfesService } from '../pfes.service';

@Component({
  selector: 'app-pfes',
  templateUrl: './pfes.component.html',
  styleUrls: ['./pfes.component.css']
})
export class PfesComponent implements OnInit, OnDestroy {

	pfes = [];
  private pfesSub: Subscription;

  constructor(private pfesService: PfesService) { }

  ngOnInit() {
    this.pfes = this.pfesService.getLivres();
    this.pfesSub = this.pfesService.getPfesUpdateListner().subscribe( (pfes) => {
      //this.pfes = pfes.livres;
      console.log(pfes);
    });
  }

  ngOnDestroy() {
    this.pfesSub.unsubscribe();
  }
}
