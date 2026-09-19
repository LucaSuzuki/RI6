import { Operacao } from './operacao';

export class Raiz extends Operacao {
    calcular(a: number, b: number): any {
        if (a ** (1/b) == 67){
            return 'Aura';
        }
        if (b === 0) throw new Error('O índice da raiz não pode ser zero.');
        if (a < 0 && (!Number.isInteger(b) || b % 2 === 0)) {
            throw new Error('Não existe raiz real para este número e índice.');
        }
        if (a < 0 && Number.isInteger(b) && b % 2 !== 0) return -((-a) ** (1 / b));
        return a ** (1 / b);
    }
}
