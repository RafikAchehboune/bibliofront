import { Component, OnInit, OnDestroy } from '@angular/core';
import { PretsService } from './prets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
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
