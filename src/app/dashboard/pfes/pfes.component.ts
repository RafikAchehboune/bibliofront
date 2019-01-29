import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivresService } from '../pfes.service';

@Component({
  selector: 'app-pfes',
  templateUrl: './pfes.component.html',
  styleUrls: ['./pfes.component.css']
})
export class PfesComponent implements OnInit, OnDestroy {

	Pfes = [];
  private pfesSub: Subscription;

  constructor(private PfesService: PfesService) { }

  ngOnInit() {
    this.pfes = this.pfesService.getLivres();
    this.pfesSub = this.pfesService.getPfesUpdateListner().subscribe( (pfes) => {
      this.pfes = pfes.pfes;
      console.log(pfes);
    });
  }

  ngOnDestroy() {
    this.pfesSub.unsubscribe();
  }
}
