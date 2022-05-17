import { mensaje } from "./string"

describe('Pruebas de strings', () => {

    it('Debe de devolver un string', () => {
        const resp = mensaje('Isidro');

        expect(typeof resp).toBe('string');
    });

    it('Debe de devolver un saludo con el nombre enviado', () => {

        const nombre: string = 'Pedro';
        const resp = mensaje(nombre);

        expect(resp).toContain('Saludo');
    });

});