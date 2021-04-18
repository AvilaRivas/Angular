import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}