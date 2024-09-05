import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contatto } from '../../models/contatto';
import { ContattiService } from '../../services/contatti.service';

@Component({
  selector: 'app-contatti-list',
  templateUrl: './contatti-list.component.html',
  styleUrl: './contatti-list.component.scss'
})
export class ContattiListComponent {

  contatti?: Contatto[]

  constructor(
    private router: Router,
    private contattiService: ContattiService
    ) {}

    ngOnInit(): void {
    this.contattiService.getContatti().subscribe(contatti => this.contatti = contatti);
  }

  addContact() {
    this.router.navigateByUrl('/add');
  }
}
