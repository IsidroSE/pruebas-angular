import { Jugador } from './clase';

describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    beforeAll( () => {
        console.log('Antes de lanzar cualquier test');
    });

    beforeEach( () => {
        console.log('Antes de lanzar cada test');
        jugador = new Jugador();
    });

    afterAll( () => {
        console.log('Despues de lanzar todos los test');
    });

    afterEach( () => {
        console.log('Despues de lanzar cada test');
    });

    it('Si recibe 20 de danio, debe de retornar 80 de hp', () => {
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });

    it('Si recibe 50 de danio, debe de retornar 50 de hp', () => {
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });

});