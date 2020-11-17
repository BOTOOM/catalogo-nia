import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalagoRoutingModule } from './catalago-routing.module';
import { VistaCatalogoComponent } from './components/vista-catalogo/vista-catalogo.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


@NgModule({
  declarations: [VistaCatalogoComponent, TarjetaComponent],
  imports: [
    CommonModule,
    CatalagoRoutingModule
  ]
})
export class CatalagoModule { }
