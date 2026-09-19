"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
class Bhaskara {
    calcular(a, b, c) {
        if (a === 0)
            throw new Error('O coeficiente a deve ser diferente de zero.');
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0)
            throw new Error('A equação não possui raízes reais.');
        const raizDelta = Math.sqrt(delta);
        return { delta, x1: (-b + raizDelta) / (2 * a), x2: (-b - raizDelta) / (2 * a) };
    }
}
exports.Bhaskara = Bhaskara;
