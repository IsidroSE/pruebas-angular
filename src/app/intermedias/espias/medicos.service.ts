import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map, Observable } from 'rxjs';
import { Medico } from './medicos.component';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos(): Observable<Medico[]> {
    return this.http.get('...').pipe(
      map( (resp: any) => resp['medicos'])
    );
  }

  agregarMedico( medico: Medico ): Observable<Medico[]> {
    return this.http.post('...', medico ).pipe(
      map( (resp: any) => resp['medico'] )
    );
  }

  borrarMedico( id: string ): Observable<Medico[]> {
    return this.http.delete('...' ).pipe(
      map( (resp: any) => resp['medico'] )
    );
  }


}
