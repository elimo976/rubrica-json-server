// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ContattiService } from '../../services/contatti.service';
// import { Contatto } from '../../models/contatto';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-form-contatto',
//   templateUrl: './form-contatto.component.html'
// })
// export class FormContattoComponent implements OnInit {
//   contattoForm?: FormGroup;
//   contattoId?: number;
//   modalitaModifica: boolean = false;

//   constructor(
//     private contattoService: ContattiService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
//     this.contattoForm = new FormGroup({
//       tipologia: new FormControl('', Validators.required),
//       nome: new FormControl(''),
//       cognome: new FormControl(''),
//       ragioneSociale: new FormControl(''),
//       indirizzo: new FormGroup({
//         viaECivico: new FormControl('', Validators.required),
//         citta: new FormControl('', Validators.required),
//         provincia: new FormControl(''),
//         cap: new FormControl('', [Validators.required, Validators.maxLength(5)]),
//         nazione: new FormControl('', Validators.required)
//       }),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       telefono: new FormGroup({
//         prefissoInternazionale: new FormControl('', Validators.required),
//         numero: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,4}[\s.-]?(?:\d{1,4}[\s.-]?){1,5}\d{1,9}$/)])
//       }),
//       dataNascita: new FormControl('')
//     });

//     this.route.params.subscribe(params => {
//       const id = +params['id'];
//       if (id) {
//         this.contattoId = id;
//         this.modalitaModifica = true;
//         this.contattoService.getContatto(id).subscribe({
//           next: (contatto) => this.contattoForm?.patchValue(contatto),
//           error: (error) => console.error('Errore durante il ricaricamento del contatto:', error)
//         });
//       } else {
//         this.modalitaModifica = false;
//       }
//     });
//   }

//   onSubmit(): void {
//     if (this.contattoForm!.valid) {
//       const contattoData = this.contattoForm!.value as Contatto;

//       if (this.modalitaModifica && this.contattoId) {
//         // Modalità modifica
//         this.contattoService.updateContatto(this.contattoId, contattoData).subscribe({
//           next: (updatedContatto: Contatto) => {
//             console.log('Contatto aggiornato con successo:', updatedContatto);
//             this.router.navigateByUrl('/');
//           },
//           error: (error) => console.error('Errore durante l\'aggiornamento del contatto:', error)
//         });
//       } else {
//         // Modalità creazione
//         this.contattoService.addContatto(contattoData).subscribe({
//           next: (nuovoContatto: Contatto) => {
//             console.log('Nuovo contatto inserito con successo:', nuovoContatto);
//             this.router.navigateByUrl('/');
//           },
//           error: (error) => console.error('Errore nell\'inserimento del nuovo contatto:', error)
//         });
//       }
//     } else {
//       console.log('Il modulo non è valido.');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContattiService } from '../../services/contatti.service';
import { Contatto } from '../../models/contatto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-contatto',
  templateUrl: './form-contatto.component.html'
})
export class FormContattoComponent implements OnInit {
  contattoForm?: FormGroup;
  contattoId?: string; // Modifica il tipo dell'ID a stringa
  modalitaModifica: boolean = false;

  constructor(
    private contattoService: ContattiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contattoForm = new FormGroup({
      tipologia: new FormControl('', Validators.required),
      nome: new FormControl(''),
      cognome: new FormControl(''),
      ragioneSociale: new FormControl(''),
      indirizzo: new FormGroup({
        viaECivico: new FormControl('', Validators.required),
        citta: new FormControl('', Validators.required),
        provincia: new FormControl(''),
        cap: new FormControl('', [Validators.required, Validators.maxLength(5)]),
        nazione: new FormControl('', Validators.required)
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormGroup({
        prefissoInternazionale: new FormControl('', Validators.required),
        numero: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,4}[\s.-]?(?:\d{1,4}[\s.-]?){1,5}\d{1,9}$/)])
      }),
      dataNascita: new FormControl('')
    });

    this.route.params.subscribe(params => {
      const id = params['id'] as string;
      if (id) {
        this.contattoId = id;
        this.modalitaModifica = true;
        this.contattoService.getContatto(id).subscribe({
          next: (contatto) => this.contattoForm?.patchValue(contatto),
          error: (error) => console.error('Errore durante il ricaricamento del contatto:', error)
        });
      } else {
        this.modalitaModifica = false;
      }
    });
  }

  onSubmit(): void {
    if (this.contattoForm!.valid) {
      const contattoData = this.contattoForm!.value as Omit<Contatto, 'id'>;

      if (this.modalitaModifica && this.contattoId) {
        // Modalità modifica
        this.contattoService.updateContatto(this.contattoId, contattoData).subscribe({
          next: (updatedContatto: Contatto) => {
            console.log('Contatto aggiornato con successo:', updatedContatto);
            this.router.navigateByUrl('/');
          },
          error: (error) => console.error('Errore durante l\'aggiornamento del contatto:', error)
        });
      } else {
        // Modalità creazione
        this.contattoService.addContatto(contattoData).subscribe({
          next: (nuovoContatto: Contatto) => {
            console.log('Nuovo contatto inserito con successo:', nuovoContatto);
            this.router.navigateByUrl('/');
          },
          error: (error) => console.error('Errore nell\'inserimento del nuovo contatto:', error)
        });
      }
    } else {
      console.log('Il modulo non è valido.');
    }
  }
}
