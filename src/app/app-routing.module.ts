import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContattoComponent } from './components/form-contatto/form-contatto.component';
import { ContattiListComponent } from './components/contatti-list/contatti-list.component';
import { ContattoDetailComponent } from './components/contatto-detail/contatto-detail.component';

const routes: Routes = [
  { path: '', component: ContattiListComponent },
  { path: 'contatti/:id', component: ContattoDetailComponent },
  { path: 'modifica/:id', component: FormContattoComponent }, // Percorso per la modifica
  { path: 'add', component: FormContattoComponent } // Percorso per l'aggiunta di un nuovo contatto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
