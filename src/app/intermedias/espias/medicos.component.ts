import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

export interface Medico {
  id?: number;
  nombre: string;
}

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: Medico[] = [];
  public mensajeError: string = '';

  constructor( public _medicoService: MedicosService ) { }

  ngOnInit() {
    this._medicoService.getMedicos()
    .subscribe( (medicos: Medico[]) => this.medicos = medicos );
  }

  agregarMedico() {

    const medico: Medico = { 
      nombre: 'Médico Juan Carlos' 
    };

    this._medicoService.agregarMedico(medico)
    .subscribe({
      next: (medicoDB: any) => this.medicos.push(medicoDB),
      error: (err: any) => {
        this.mensajeError = err.message;
      }
    });
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
