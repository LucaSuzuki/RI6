"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
const operacao_1 = require("./operacao");
class Divisao extends operacao_1.Operacao {
    calcular(a, b) {
        if (b === 0) {
            throw new Error('Não é possível dividir por zero.');
        }
        if (a / b == 67) {
            return 'Aura';
        }
        return a / b;
    }
}
exports.Divisao = Divisao;
