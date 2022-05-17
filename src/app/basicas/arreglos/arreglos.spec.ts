import { obtenerRobots } from './arreglos';
describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 registros', () => {
        const robots = obtenerRobots();
        expect(robots.length).toBeGreaterThanOrEqual(3);
    });

    it('Estan RD2D y 3CPO', () => {
        const robots = obtenerRobots();
        expect(robots).toContain('C3PO');
        expect(robots).toContain('R2D2');
    });

});