import { Medico, MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService( null! );

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3']

        spyOn( servicio, 'getMedicos' ).and
        .callFake( () => {
            return from( [ medicos ] );
        });

        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un medico', () => {

        const espia = spyOn( servicio, 'agregarMedico' )
        .and.callFake( medico => {
            return new Observable();
        });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo medico al array de medicos', () => {

        const medico: Medico = { 
            id: 1, 
            nombre: 'Juan Palomo'
        };

        spyOn( servicio, 'agregarMedico' )
        .and.returnValue( from( [ medico ] ) );

        componente.agregarMedico();

        expect( componente.medicos.indexOf(medico) )
        .toBeGreaterThanOrEqual(0);

    });

    it('Si agregar falla, la propiedad mensaje de error debe de tener el error que enviemos', () => {
        
        const miError = 'No se pudo agregar el medico';

        spyOn( servicio, 'agregarMedico' )
        .and.returnValue( throwError(
            () => new Error(miError)
        ) );

        componente.agregarMedico();

        expect( componente.mensajeError )
        .toBe( miError );

    });


});
