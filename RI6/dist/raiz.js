"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raiz = void 0;
const operacao_1 = require("./operacao");
class Raiz extends operacao_1.Operacao {
    calcular(a, b) {
        if (a ** (1 / b) == 67) {
            return 'Aura';
        }
        if (b === 0)
            throw new Error('O índice da raiz não pode ser zero.');
        if (a < 0 && (!Number.isInteger(b) || b % 2 === 0)) {
            throw new Error('Não existe raiz real para este número e índice.');
        }
        if (a < 0 && Number.isInteger(b) && b % 2 !== 0)
            return -((-a) ** (1 / b));
        return a ** (1 / b);
    }
}
exports.Raiz = Raiz;
