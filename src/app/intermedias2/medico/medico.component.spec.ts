import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing'

import { MedicoComponent } from "./medico.component";
import { MedicoService } from './medico.service';


describe('MedicoComponent', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [
                MedicoService
            ],
            imports: [
                HttpClientModule
            ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        componente = fixture.componentInstance;

    });

    it('Init: debe crearse el componente', () => {
        expect( componente ).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Juan';
        const msg = componente.saludarMedico(nombre);
        expect( msg ).toContain(nombre);
    });

});
