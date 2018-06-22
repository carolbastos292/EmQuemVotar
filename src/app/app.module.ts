import { ConfigService } from './config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AvaliarTemasComponent } from './avaliar-temas/avaliar-temas.component';
import { AboutComponent } from './about/about.component';
import { CandidatosRecomendadosComponent } from './candidatos-recomendados/candidatos-recomendados.component';
import { TemaComponent } from './avaliar-temas/tema/tema.component';
import { SubtemaComponent } from './avaliar-temas/tema/subtema/subtema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
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


  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
