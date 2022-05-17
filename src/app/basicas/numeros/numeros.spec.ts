import { incrementar } from "./numeros";

describe('Pruebas con numeros', () => {

    it('Debe de devolver 100 si el numero que le pasamos es mayor que 100', () => {

        const numero = incrementar(300);
        expect(numero).toBe(100);
    });

    it('Debe de devolver el numro + 1 si es inferior a 100', () => {

        const numero = incrementar(50);
        expect(numero).toBe(51);
    });

});