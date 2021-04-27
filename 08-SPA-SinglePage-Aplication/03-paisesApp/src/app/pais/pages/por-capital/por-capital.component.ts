import { Component, Input} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  placeholder: string = "Ver por capital...";
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termineo: string){
    this.hayError = false;
    this.termino = termineo;
    this.paisService.buscarCapital(this.termino)
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
  }

}
