"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtracao = void 0;
const operacao_1 = require("./operacao");
class Subtracao extends operacao_1.Operacao {
    calcular(a, b) {
        if (a - b == 67) {
            return 'Aura';
        }
        return a - b;
    }
}
exports.Subtracao = Subtracao;
