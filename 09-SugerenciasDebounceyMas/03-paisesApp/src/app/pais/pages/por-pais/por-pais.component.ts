import { Component, Input} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent  {

  placeholder="Ver por pais....";
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = []
  mostrarSugerencias: boolean = false;
  constructor(private paisService: PaisService) { }

  buscar(termineo: string){
    console.log("buscar");
    this.hayError = false;
    this.termino = termineo;
    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        this.paises = paises;
        console.log(paises);
      }, (err) => {
        this.hayError = true; 
        this.paises = [];
      });
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe( (paises) => {
        this.paisesSugeridos = paises.splice(0,5);
        console.log(this.paisesSugeridos);
      }, (err) => {
        this.paisesSugeridos = [];
      });
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
    console.log("buscar sugerido");
  }
}
