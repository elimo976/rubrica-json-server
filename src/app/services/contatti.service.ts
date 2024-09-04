// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Contatto } from '../models/contatto';
// import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContattiService {

//   constructor(private http: HttpClient) { }

//   private BASE_URL = 'http://localhost:3000';
//   private contatti: Contatto[] = []; // Array temporaneo per i contatti


//   getContatti(): Observable<Contatto[]> {
//     return this.http.get<Contatto[]>(`${this.BASE_URL}/contatti`);
//   }

//   getContatto(id: number): Observable<Contatto> {
//     return this.http.get<Contatto>(`${this.BASE_URL}/contatti/${id}`);
//   }

//   private getNextId(): Observable<number> {
    
//     return this.http.get<Contatto[]>(`${this.BASE_URL}/contatti`).pipe(
//       map(contatti => {
//         // Estrai gli ID esistenti e calcola il prossimo ID
//         const ids = contatti.map(c => c.id).filter(id => id !== undefined) as number[];
//         if (ids.length === 0) {
//           return 1; // Se non ci sono ID, inizia con 1
//         }
//         return (Math.max(...ids) + 1); // Restituisce il massimo ID + 1
//       }),
//       catchError(error => {
//         console.error('Errore durante il calcolo del prossimo ID:', error);
//         return of(1); // Se c'è un errore, inizia con ID 1
//       })
//     );
//   }
  
//   addContatto(contatto: Omit<Contatto, 'id'>): Observable<Contatto> {
//     return this.getNextId().pipe(
//       switchMap(nextId => {
//         const newContatto = { ...contatto, id: nextId };
//         // Invio della richiesta POST al backend per aggiungere il nuovo contatto
//         return this.http.post<Contatto>(`${this.BASE_URL}/contatti`, newContatto);
//       })
//     );
//   }
//   updateContatto(id: number, contattoData: Partial<Contatto>): Observable<Contatto> {
//     return this.http.patch<Contatto>(`${this.BASE_URL}/contatti/${id}`, contattoData);
//   }

//   deleteContatto(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.BASE_URL}/contatti/${id}`);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contatto } from '../models/contatto';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  private BASE_URL = 'http://localhost:3000';
  private contatti: Contatto[] = []; // Array temporaneo per i contatti

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(`${this.BASE_URL}/contatti`);
  }

  getContatto(id: string): Observable<Contatto> {
    return this.http.get<Contatto>(`${this.BASE_URL}/contatti/${id}`);
  }

  private getNextId(): Observable<string> {
    return this.http.get<Contatto[]>(`${this.BASE_URL}/contatti`).pipe(
      map(contatti => {
        // Estrai gli ID esistenti e calcola il prossimo ID
        const ids = contatti.map(c => c.id).filter(id => id !== undefined) as string[];
        if (ids.length === 0) {
          return '1'; // Se non ci sono ID, inizia con '1'
        }
        const maxId = Math.max(...ids.map(id => parseInt(id, 10)));
        return (maxId + 1).toString(); // Restituisce il massimo ID + 1 come stringa
      }),
      catchError(error => {
        console.error('Errore durante il calcolo del prossimo ID:', error);
        return of('1'); // Se c'è un errore, inizia con ID '1'
      })
    );
  }

  addContatto(contatto: Omit<Contatto, 'id'>): Observable<Contatto> {
    return this.getNextId().pipe(
      switchMap(nextId => {
        const newContatto = { ...contatto, id: nextId };
        // Invio della richiesta POST al backend per aggiungere il nuovo contatto
        return this.http.post<Contatto>(`${this.BASE_URL}/contatti`, newContatto);
      })
    );
  }

  updateContatto(id: string, contattoData: Partial<Contatto>): Observable<Contatto> {
    return this.http.patch<Contatto>(`${this.BASE_URL}/contatti/${id}`, contattoData);
  }

  deleteContatto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/contatti/${id}`);
  }
}

