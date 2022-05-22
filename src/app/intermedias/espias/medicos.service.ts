import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Medico } from './medicos.component';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos(): any {
    return this.http.get('...').pipe(
      map( (resp: any) => resp['medicos'])
    );
  }

  agregarMedico( medico: Medico ): any {
    return this.http.post('...', medico ).pipe(
      map( (resp: any) => resp['medico'] )
    );
  }

  borrarMedico( id: string ): any {
    return this.http.delete('...' ).pipe(
      map( (resp: any) => resp['medico'] )
    );
  }


}
