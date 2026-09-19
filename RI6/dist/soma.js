"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = void 0;
const operacao_1 = require("./operacao");
class Soma extends operacao_1.Operacao {
    calcular(a, b) {
        if (a + b == 67) {
            return 'Aura';
        }
        return a + b;
    }
}
exports.Soma = Soma;
