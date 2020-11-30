import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.sass']
})
export class TarjetaComponent implements OnInit {

  @Input() objeto: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.objeto);
  }

}
