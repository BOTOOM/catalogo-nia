import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaCatalogoComponent } from './components/vista-catalogo/vista-catalogo.component';

const routes: Routes = [
  {
    path: '',
    component: VistaCatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalagoRoutingModule { }
