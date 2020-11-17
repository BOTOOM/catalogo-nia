import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  exports: [NavbarComponent ]
})
export class SharedModule { }
