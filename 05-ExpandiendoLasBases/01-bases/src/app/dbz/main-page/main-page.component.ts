import { ClassStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "Roshi",
    poder: 1000
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService){

  }

}
