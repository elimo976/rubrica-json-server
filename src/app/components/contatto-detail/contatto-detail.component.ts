// // contatto-detail.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ContattiService } from '../../services/contatti.service';
// import { Contatto } from '../../models/contatto';

// @Component({
//   selector: 'app-contatto-detail',
//   templateUrl: './contatto-detail.component.html'
// })
// export class ContattoDetailComponent implements OnInit {
//   contatto?: Contatto;
//   contatti?: Contatto[];

//   constructor(
//     private contattiService: ContattiService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const id = Number(params['id']);
//       if (!isNaN(id)) {
//         this.contattiService.getContatto(id).subscribe({
//           next: (contatto) => this.contatto = contatto,
//           error: (err) => console.error('Errore durante il caricamento del contatto:', err)
//         });
//       } else {
//         console.error('ID non valido:', params['id']);
//       }
//     });
//   }
  

//   modificaContatto(): void {
//     if (this.contatto?.id) {
//       this.router.navigateByUrl(`/modifica/${this.contatto?.id}`);
//     } else {
//       console.error('ID del contatto non presente o non valido.');
//     }
//   }

//   eliminaContatto(contattoId: number): void {
//     if(confirm('Sei sicuro di eliminare questo contatto?')){
//       this.contattiService.deleteContatto(contattoId).subscribe({
//         next: () => {
//           console.log('Contatto eliminato con successo!');
//           this.contattiService.getContatti().subscribe({
//             next: (contatti) => this.contatti = contatti
//           });
//           this.router.navigateByUrl('/')
//         },
//         error: (error) => {
//           console.error('Errore durante l\'eliminazione del contatto: ', error);
//         }
//       })
//     }

//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContattiService } from '../../services/contatti.service';
import { Contatto } from '../../models/contatto';

@Component({
  selector: 'app-contatto-detail',
  templateUrl: './contatto-detail.component.html'
})
export class ContattoDetailComponent implements OnInit {
  contatto?: Contatto;
  contatti?: Contatto[];

  constructor(
    private contattiService: ContattiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // ID come stringa
      if (id) {
        this.contattiService.getContatto(id).subscribe({
          next: (contatto) => this.contatto = contatto,
          error: (err) => console.error('Errore durante il caricamento del contatto:', err)
        });
      } else {
        console.error('ID non valido:', id);
      }
    });
  }

  modificaContatto(): void {
    if (this.contatto?.id) {
      this.router.navigateByUrl(`/modifica/${this.contatto.id}`);
    } else {
      console.error('ID del contatto non presente o non valido.');
    }
  }

  eliminaContatto(contattoId: string): void { // ID come stringa
    if (confirm('Sei sicuro di eliminare questo contatto?')) {
      this.contattiService.deleteContatto(contattoId).subscribe({
        next: () => {
          console.log('Contatto eliminato con successo!');
          this.contattiService.getContatti().subscribe({
            next: (contatti) => this.contatti = contatti
          });
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error('Errore durante l\'eliminazione del contatto:', error);
        }
      });
    }
  }
}
