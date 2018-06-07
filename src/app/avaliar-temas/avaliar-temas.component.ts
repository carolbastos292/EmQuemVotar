import { Component, OnInit } from '@angular/core';
import {Tema} from './tema/tema.model';
import {Theme, AvaliarTemasService, Resposta} from './avaliar-temas.service';


@Component({
  selector: 'eqv-avaliar-temas',
  templateUrl: './avaliar-temas.component.html',
  providers: [ AvaliarTemasService ],
  styleUrls: ['./avaliar-temas.component.css']
})
export class AvaliarTemasComponent implements OnInit {
  //array de temas
  temas: Tema[] = [
  {
    id: '1',
    name : 'Educação',
    imagePath : '../../assets/img/icons/educacao.png'
  },
  {
    id: '2',
    name : 'Saúde',
    imagePath : '../../assets/img/icons/saude.png'
  },
  {
    id: '3',
    name : 'Economia',
    imagePath : '../../assets/img/icons/economia.png'
  },
  {
    id: '4',
    name : 'Segurança',
    imagePath : '../../assets/img/icons/segurança.png'
  },
  {
    id: '5',
    name : 'Ciência e Tecnologia',
    imagePath : '../../assets/img/icons/ciencia.png'
  },
  {
    id: '6',
    name : 'Meio Ambiente',
    imagePath : '../../assets/img/icons/meio_ambiente.png'
  }
];

themes: Theme[];


  constructor(private themesService: AvaliarTemasService) {
    this.themesService.getThemesAll().subscribe(
      (data: Resposta) => this.themes = data['themes']
     );

   }

  ngOnInit() {
  }

}


