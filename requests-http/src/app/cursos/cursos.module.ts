import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    CursosListaComponent
  ],
  imports: [
    CursosRoutingModule
  ]
})
export class CursosModule { }
