import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MedicoService {

  constructor( public http: HttpClient ) { }

  getMedicos(): Observable<any[]> {
    return this.http.get<any[]>('...');
  }
}
