import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AvaliarTemasComponent } from './avaliar-temas/avaliar-temas.component';
import { AboutComponent } from './about/about.component';
import { CandidatosRecomendadosComponent } from './candidatos-recomendados/candidatos-recomendados.component';
import { TemaComponent } from './avaliar-temas/tema/tema.component';
import { SubtemaComponent } from './avaliar-temas/tema/subtema/subtema.component';

import { TemaSubtemasComponent } from './tema-subtemas/tema-subtemas.component';
import { CandidatoDetalhesComponent } from './candidato-detalhes/candidato-detalhes.component';
import { ContatosComponent } from './contatos/contatos.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AvaliarTemasComponent,
    AboutComponent,
    CandidatosRecomendadosComponent,
    TemaComponent,
    SubtemaComponent,
    TemaSubtemasComponent,
    CandidatoDetalhesComponent,
    ContatosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
