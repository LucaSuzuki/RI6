import { Operacao } from './operacao';

export class Multiplicacao extends Operacao {
    calcular(a: number, b: number): any {
        if (a * b == 67){
            return 'Aura';
        }
        return a * b;
    }
}
