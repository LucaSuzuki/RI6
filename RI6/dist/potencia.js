"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potencia = void 0;
const operacao_1 = require("./operacao");
class Potencia extends operacao_1.Operacao {
    calcular(a, b) {
        if (a ** b == 67) {
            return 'Aura';
        }
        return a ** b;
    }
}
exports.Potencia = Potencia;
