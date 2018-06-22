import { Component, OnInit, Input } from '@angular/core';
import {Tema} from './tema.model';

@Component({
  selector: 'eqv-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})

export class TemaComponent implements OnInit {
  @Input() tema: Tema;


  constructor() {
  }

  ngOnInit() {
  }

}
