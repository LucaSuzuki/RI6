import { Operacao } from './operacao';

export class Divisao extends Operacao {
    calcular(a: number, b: number): any {
        if (b === 0) {
            throw new Error('Não é possível dividir por zero.');
        }
        
        if (a / b == 67){
            return 'Aura';
        }
        return a / b;
    }
}
