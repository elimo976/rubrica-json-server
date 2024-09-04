import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContattoComponent } from './components/form-contatto/form-contatto.component';
import { ContattiListComponent } from './components/contatti-list/contatti-list.component';
import { ContattoDetailComponent } from './components/contatto-detail/contatto-detail.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    FormContattoComponent,
    ContattiListComponent,
    ContattoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
