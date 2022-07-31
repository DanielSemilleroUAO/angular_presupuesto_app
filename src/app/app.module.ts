import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoService } from './egreso/egreso.service';
import { IngresoService } from './ingreso/ingreso.service';

@NgModule({
  declarations: [				
    AppComponent,
      CabeceroComponent,
      IngresoComponent,
      EgresoComponent,
      FormularioComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
