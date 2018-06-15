import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {AvaliarTemasComponent} from './avaliar-temas/avaliar-temas.component'
import {TemaSubtemasComponent} from './tema-subtemas/tema-subtemas.component'
import {CandidatosRecomendadosComponent} from './candidatos-recomendados/candidatos-recomendados.component'
import {CandidatoDetalhesComponent} from './candidato-detalhes/candidato-detalhes.component'
import {ContatosComponent} from './contatos/contatos.component'
import {HeaderComponent} from './header/header.component'

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'avaliar-temas', component: AvaliarTemasComponent},
	{path: 'temas/:id', component: TemaSubtemasComponent},
	{path: 'candidatos-recomendados', component: CandidatosRecomendadosComponent},
	{path: 'candidato-detalhes', component: CandidatoDetalhesComponent},
	{path: 'contatos', component: ContatosComponent},
	{path: 'header', component: HeaderComponent}

]