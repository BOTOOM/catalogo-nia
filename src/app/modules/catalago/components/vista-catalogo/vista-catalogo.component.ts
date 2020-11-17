import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../../shared/services/json.service';

@Component({
  selector: 'app-vista-catalogo',
  templateUrl: './vista-catalogo.component.html',
  styleUrls: ['./vista-catalogo.component.sass']
})
export class VistaCatalogoComponent implements OnInit {

  datos: any[];

  constructor(
    private jsonService: JsonService,
  ) { }

  ngOnInit(): void {
    this.jsonService.get('datos').subscribe(  res => {
      console.log(res);
      this.datos = res as any[];
    }, (error) => {
      console.log('ERRORES: ', error);
    });
  }

}
