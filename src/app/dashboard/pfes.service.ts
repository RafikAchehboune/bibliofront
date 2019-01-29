import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LivresService {
  private livres = [
    {
      'n': 1,
      'titre': 'The Supreme Dweller',
      'auteur': 'Richard N. Thompson',
      'motsCles': 'Acidity, Actinides, Alkali metals, Inorganic Chemistry'
    },
    {
      'n': 2,
      'titre': 'The Brother of Machine',
      'auteur': 'Michael A. Canning',
      'motsCles': 'Basicity, Biaryls, Holography, Miscellaneous'
    },
    {
      'n': 3,
      'titre': 'The Shell\'s Fall',
      'auteur': 'Kimberly S. Bean',
      'motsCles': 'Imaging agents, Stem cells, The sun'
    },
    {
      'n': 4,
      'titre': 'Birthday Present\'s Damned Canary',
      'auteur': 'Kyle L. Hogan',
      'motsCles': 'Language, Mars, The moon, Meteors'
    },
    {
      'n': 5,
      'titre': 'Salvageborn',
      'auteur': 'Kimberly D. Wyant',
      'motsCles': 'Nasa, Immunology, International Space Station, Richard Feynman'
    }
  ];
  private livresUpdate = new Subject<{livres: any}>();

  getLivres() {
    return [...this.livres];
  }

  getLivresUpdateListner() {
    return this.livresUpdate.asObservable();
  }

  ajouterLivre(titre: string, auteur: string, motsCles: string) {
    const len = this.livres.length + 1;
    this.livres.push({
      'n': len,
      'titre': titre,
      'auteur': auteur,
      'motsCles': motsCles
    });
    this.livresUpdate.next({ livres: [...this.livres]});
  }
}
