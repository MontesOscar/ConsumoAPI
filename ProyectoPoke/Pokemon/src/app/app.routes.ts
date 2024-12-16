import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokeComponent } from './components/poke/poke.component';

export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent },         
  { path: 'poke/:id', component: PokeComponent },            
];
