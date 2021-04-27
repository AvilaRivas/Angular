import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id))
      )
      .subscribe( pais => {
        this.pais = pais;
      });

    // this.activatedRoute.params
    //   .subscribe( ({id}) => {   //{id} esta utilizando la destructuracion del objeto params, en params vienen todos los vcalores del 
    //     console.log(id);                        // en el url y ahi debe venir un valor con el nombre id
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   }
    // );
  }

}
