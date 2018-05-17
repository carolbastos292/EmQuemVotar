import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {AvaliarTemasComponent} from './avaliar-temas/avaliar-temas.component'
export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'avaliar-temas', component: AvaliarTemasComponent}
]