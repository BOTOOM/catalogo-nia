import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class JsonService {
  url = `https://raw.githubusercontent.com/BOTOOM/repo_datos/master/catalogo/`;

  constructor(
    private http: HttpClient
    ) {
    console.info('servicio de datos_json funcionando');

  }

  get(endpoint: string) {
    console.log(`${this.url}${endpoint}.json`);
    return this.http.get(`${this.url}${endpoint}.json`);
  }
}
