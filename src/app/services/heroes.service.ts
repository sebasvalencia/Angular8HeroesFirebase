import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  //url para hacer operaciones
  heroesURL: string = "https://heroesapp-51a46.firebaseio.com/heroes.json";

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);//un string de un json valido
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    //la funcion regresa un observable
    return this.http.post(this.heroesURL, body, { headers: headers }).map(res => {
      //console.log(res.json);//respuesta
      return res.json;
    })

  }

}
