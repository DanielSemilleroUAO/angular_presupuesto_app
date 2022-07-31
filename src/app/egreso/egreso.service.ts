import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egresos: Egreso[] = [new Egreso('renta', 2000)];

  constructor() { }

}
