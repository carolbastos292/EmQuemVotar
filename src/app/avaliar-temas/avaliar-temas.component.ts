
import { Component, OnInit, Injectable } from '@angular/core';
import {Tema} from './tema/tema.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Config, ConfigService } from './../config.service';
import { AvaliarTemasService, Theme, Resposta } from './avaliar-temas.service';


@Component({
  selector: 'eqv-avaliar-temas',
  templateUrl: './avaliar-temas.component.html',
  providers: [ AvaliarTemasService ],
  styleUrls: ['./avaliar-temas.component.css']
})


@Injectable()

export class AvaliarTemasComponent {


  temasSelecionados: number[] = [];

  url;

  temas: Tema[] = [
    {
      id: '1',
      name : 'Educação',
      imagePath : '../../assets/img/icons/educacao.png',
      status: false
    },
    {
      id: '2',
      name : 'Saúde',
      imagePath : '../../assets/img/icons/saude.png',
      status: false
    },
    {
      id: '3',
      name : 'Economia',
      imagePath : '../../assets/img/icons/economia.png',
      status: false
    },
    {
      id: '4',
      name : 'Segurança',
      imagePath : '../../assets/img/icons/segurança.png',
      status: false
    },
    {
      id: '5',
      name : 'Ciência e Tecnologia',
      imagePath : '../../assets/img/icons/ciencia.png',
      status: false
    },
    {
      id: '6',
      name : 'Meio Ambiente',
      imagePath : '../../assets/img/icons/meio_ambiente.png',
      status: false
    }
  ];

  config: Config;
  error:  string;
  themes: Theme[];

  constructor(private themesService: AvaliarTemasService) {

    this.themesService.getThemesAll().subscribe(
       (data: Resposta) => this.themes = data['themes']
      );

    }

}
