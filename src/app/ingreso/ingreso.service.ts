import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos: Ingreso[] = [new Ingreso('salario', 10000)];

  constructor() { }

}
