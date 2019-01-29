import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PretsService {
  private prets = [
    {
      'n': 1,
      'titre': 'The Supreme Dweller',
      'utilisateur': 'Harold Aspden',
      'dateEmprunt': '2018-09-03'
    },
    {
      'n': 2,
      'titre': 'The Shell\'s Fall',
      'utilisateur': 'John Bedini',
      'dateEmprunt': '2018-10-25'
    },
    {
      'n': 3,
      'titre': 'Birthday Present\'s Damned Canary',
      'utilisateur': 'Robert E. Beutlich',
      'dateEmprunt': '2018-10-24'
    },
    {
      'n': 4,
      'titre': 'Salvageborn',
      'utilisateur': 'Patrick Bailey',
      'dateEmprunt': '2018-10-31'
    },
    {
      'n': 5,
      'titre': 'The Brother of Machine',
      'utilisateur': 'Patrick Bailey',
      'dateEmprunt': '2018-10-31'
    }
  ];
  private pretsUpdate = new Subject<{prets: any}>();

  getPrets() {
    return [...this.prets];
  }

  getPretsUpdateListner() {
    return this.pretsUpdate.asObservable();
  }

  ajouterPret(titre: string, utilisateur: string, dateEmprunt: string) {
    const len = this.prets.length + 1;
    this.prets.push({
      'n': len,
      'titre': titre,
      'utilisateur': utilisateur,
      'dateEmprunt': dateEmprunt
    });
    this.pretsUpdate.next({ prets: [...this.prets]});
  }
}
