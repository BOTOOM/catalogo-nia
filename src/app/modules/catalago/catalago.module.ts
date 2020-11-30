import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CatalagoRoutingModule } from './catalago-routing.module';
import { VistaCatalogoComponent } from './components/vista-catalogo/vista-catalogo.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


@NgModule({
  declarations: [VistaCatalogoComponent, TarjetaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CatalagoRoutingModule
  ]
})
export class CatalagoModule { }
