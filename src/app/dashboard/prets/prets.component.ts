import { Component, OnInit, OnDestroy } from '@angular/core';
import { PretsService } from '../prets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prets',
  templateUrl: './prets.component.html',
  styleUrls: ['./prets.component.css']
})
export class PretsComponent implements OnInit, OnDestroy {
  prets = [];
  private pretsSub: Subscription;

  constructor(private pretsService: PretsService) { }

  ngOnInit() {
    this.prets = this.pretsService.getPrets();
    this.pretsSub = this.pretsService.getPretsUpdateListner().subscribe( (prets) => {
      this.prets = prets.prets;
      console.log(prets);
    });
  }

  ngOnDestroy() {
    this.pretsSub.unsubscribe();
  }

}
